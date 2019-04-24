import {Injectable} from '@angular/core';
import {SolidSession} from '../../models/solid/solid-session.model';

declare let solid: any;
declare let $rdf: any;
// import * as $rdf from 'rdflib'

// TODO: Remove any UI interaction from this service
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NamedNode} from 'src/assets/types/rdflib';

const VCARD = $rdf.Namespace('http://www.w3.org/2006/vcard/ns#');
const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
const RDF = $rdf.Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
const SCHEMA = $rdf.Namespace('http://schema.org/');

/**
 * A service layer for RDF data manipulation using rdflib.js
 * @see https://solid.inrupt.com/docs/manipulating-ld-with-rdflib
 */
@Injectable({
    providedIn: 'root',
})
export class RdfService {

    session: SolidSession;
    store = $rdf.graph();

    /**
     * A helper object that connects to the web, loads data, and saves it back. More powerful than using a simple
     * store object.
     * When you have a fetcher, then you also can ask the query engine to go fetch new linked data automatically
     * as your query makes its way across the web.
     * @see http://linkeddata.github.io/rdflib.js/doc/Fetcher.html
     */
    fetcher = $rdf.Fetcher;

    /**
     * The UpdateManager allows you to send small changes to the server to “patch” the data as your user changes data in
     * real time. It also allows you to subscribe to changes other people make to the same file, keeping track of
     * upstream and downstream changes, and signaling any conflict between them.
     * @see http://linkeddata.github.io/rdflib.js/doc/UpdateManager.html
     */
    updateManager = $rdf.UpdateManager;

    constructor(private toastr: ToastrService) {
        const fetcherOptions = {};
        this.fetcher = new $rdf.Fetcher(this.store, fetcherOptions);
        this.updateManager = new $rdf.UpdateManager(this.store);
        this.getSession();
    }

    /**
     * Fetches the session from Solid, and store results in localStorage
     */
    getSession = async () => {
        this.session = await solid.auth.currentSession(localStorage);
    };

    /**
     * Gets a node that matches the specified pattern using the VCARD onthology
     *
     * any() can take a subject and a predicate to find Any one person identified by the webId
     * that matches against the node/predicated
     *
     * @param {string} node VCARD predicate to apply to the $rdf.any()
     * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
     * @return {string} The value of the fetched node or an emtpty string
     * @see https://github.com/solid/solid-tutorial-rdflib.js
     */
    getValueFromVcard = (node: string, webId?: string): string | any => {
        return this.getValueFromNamespace(node, VCARD, webId);
    };

    /**
     * Gets a node that matches the specified pattern using the FOAF onthology
     * @param {string} node FOAF predicate to apply to the $rdf.any()
     * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
     * @return {string} The value of the fetched node or an emtpty string
     */
    getValueFromFoaf = (node: string, webId?: string) => {
        return this.getValueFromNamespace(node, FOAF, webId);
    };

    /**
     * Gets a node that matches the specified pattern using the LDP onthology
     * @param {string} node LDP predicate to apply to the $rdf.any()
     * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
     * @return {string} The value of the fetched node or an emtpty string
     */
    getValueFromLdp = (node: string, webId?: string) => {
        return this.getValueFromNamespace(node, SCHEMA, webId);
    };

    /**
     * Gets a node that matches the specified pattern using the Schema onthology
     * @param {string} node Schema predicate to apply to the $rdf.any()
     * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
     * @return {string} The value of the fetched node or an emtpty string
     */
    getValueFromSchema = (node: string, webId?: string) => {
        return this.getValueFromNamespace(node, SCHEMA, webId);
    };

    transformDataForm = (form: NgForm, me: any, doc: any) => {
        const insertions = [];
        const deletions = [];
        const fields = Object.keys(form.value);
        const oldProfileData = JSON.parse(localStorage.getItem('oldProfileData')) || {};

        // We need to split out into three code paths here:
        // 1. There is an old value and a new value. This is the update path
        // 2. There is no old value and a new value. This is the insert path
        // 3. There is an old value and no new value. Ths is the delete path
        // These are separate codepaths because the system needs to know what to do in each case
        fields.map((field) => {

            const predicate = VCARD(this.getFieldName(field));
            const subject = this.getUriForField(field, me);
            const why = doc;

            const fieldValue = this.getFieldValue(form, field);
            const oldFieldValue = this.getOldFieldValue(field, oldProfileData);

            // if there's no existing home phone number or email address, we need to add one, then add the link for hasTelephone or hasEmail
            if (!oldFieldValue && fieldValue && (field === 'phone' || field === 'email')) {
                this.addNewLinkedField(field, insertions, predicate, fieldValue, why, me);
            } else {

                // Add a value to be updated
                if (oldProfileData[field] && form.value[field] && !form.controls[field].pristine) {
                    deletions.push($rdf.st(subject, predicate, oldFieldValue, why));
                    insertions.push($rdf.st(subject, predicate, fieldValue, why));
                } else if (oldProfileData[field] && !form.value[field] && !form.controls[field].pristine) {
                    deletions.push($rdf.st(subject, predicate, oldFieldValue, why));
                } else if (!oldProfileData[field] && form.value[field] && !form.controls[field].pristine) {
                    insertions.push($rdf.st(subject, predicate, fieldValue, why));
                }
            }
        });

        return {
            insertions,
            deletions,
        };
    };

    private addNewLinkedField(field, insertions, predicate, fieldValue, why, me: any) {
        // Generate a new ID. This id can be anything but needs to be unique.
        const newId = field + ':' + Date.now();

        // Get a new subject, using the new ID
        const newSubject = $rdf.sym(this.session.webId.split('#')[0] + '#' + newId);

        // Set new predicate, based on email or phone fields
        const newPredicate = field === 'phone' ? $rdf.sym(VCARD('hasTelephone')) : $rdf.sym(VCARD('hasEmail'));

        // Add new phone or email to the pod
        insertions.push($rdf.st(newSubject, predicate, fieldValue, why));

        // Set the type (defaults to Home/Personal for now) and insert it into the pod as well
        // Todo: Make this dynamic
        const type = field === 'phone' ? $rdf.literal('Home') : $rdf.literal('Personal');
        insertions.push($rdf.st(newSubject, VCARD('type'), type, why));

        // Add a link in #me to the email/phone number (by id)
        insertions.push($rdf.st(me, newPredicate, newSubject, why));
    }

    private getUriForField(field, me): string {
        let uriString: string;
        let uri: any;

        switch (field) {
            case 'phone':
                uriString = this.getValueFromVcard('hasTelephone');
                if (uriString) {
                    uri = $rdf.sym(uriString);
                }
                break;
            case 'email':
                uriString = this.getValueFromVcard('hasEmail');
                if (uriString) {
                    uri = $rdf.sym(uriString);
                }
                break;
            default:
                uri = me;
                break;
        }
        return uri;
    }

    /**
     * Extracts the value of a field of a NgForm and converts it to a $rdf.NamedNode
     * @param {NgForm} form
     * @param {string} field The name of the field that is going to be extracted from the form
     * @return {RdfNamedNode}
     */
    private getFieldValue(form: NgForm, field: string): any {
        let fieldValue: any;

        if (!form.value[field]) {
            return;
        }

        switch (field) {
            case 'phone':
                fieldValue = $rdf.sym('tel:+' + form.value[field]);
                break;
            case 'email':
                fieldValue = $rdf.sym('mailto:' + form.value[field]);
                break;
            default:
                fieldValue = form.value[field];
                break;
        }

        return fieldValue;
    }

    private getOldFieldValue(field, oldProfile): any {
        let oldValue: any;

        if (!oldProfile || !oldProfile[field]) {
            return;
        }

        switch (field) {
            case 'phone':
                oldValue = $rdf.sym('tel:+' + oldProfile[field]);
                break;
            case 'email':
                oldValue = $rdf.sym('mailto:' + oldProfile[field]);
                break;
            default:
                oldValue = oldProfile[field];
                break;
        }

        return oldValue;
    }

    private getFieldName(field): string {
        switch (field) {
            case 'company':
                return 'organization-name';
            case 'phone':
            case 'email':
                return 'value';
            default:
                return field;
        }
    }

    updateProfile = async (form: NgForm) => {
        const me = $rdf.sym(this.session.webId);
        const doc = $rdf.NamedNode.fromValue(this.session.webId.split('#')[0]);
        const data = this.transformDataForm(form, me, doc);

        // Update existing values
        if (data.insertions.length > 0 || data.deletions.length > 0) {
            this.updateManager.update(data.deletions, data.insertions, (response, success, message) => {
                if (success) {
                    this.toastr.success('Your Solid profile has been successfully updated', 'Success!');
                    form.form.markAsPristine();
                    form.form.markAsTouched();
                } else {
                    this.toastr.error('Message: ' + message, 'An error has occurred');
                }
            });
        }
    };

    getAddress = () => {
        const linkedUri = this.getValueFromVcard('hasAddress');

        if (linkedUri) {
            return {
                locality: this.getValueFromVcard('locality', linkedUri),
                country_name: this.getValueFromVcard('country-name', linkedUri),
                region: this.getValueFromVcard('region', linkedUri),
                street: this.getValueFromVcard('street-address', linkedUri),
            };
        }

        return {};
    };

    // Function to get email. This returns only the first email, which is temporary
    getEmail = () => {
        const linkedUri = this.getValueFromVcard('hasEmail');

        if (linkedUri) {
            return this.getValueFromVcard('value', linkedUri).split('mailto:')[1];
        }

        return '';
    };

    // Function to get phone number. This returns only the first phone number, which is temporary. It also ignores the type.
    getPhone = () => {
        const linkedUri = this.getValueFromVcard('hasTelephone');

        if (linkedUri) {
            return this.getValueFromVcard('value', linkedUri).split('tel:+')[1];
        }
    };

    getProfile = async () => {

        if (!this.session) {
            await this.getSession();
        }
        console.log('Wait for it...');
        if (this.session == null) {
            console.log('NULL SESSION!!!');
        }

        try {
            await this.fetcher.load(this.session.webId);

            console.log('Profile loaded: ' + this.getProfileField('fn'));
            return {
                fn: await this.getProfileField('fn'),
                company: await this.getProfileField('organization-name'),
                phone: this.getPhone(),
                role: await this.getProfileField('role'),
                image: await this.getProfileField('hasPhoto'),
                address: this.getAddress(),
                email: this.getEmail(),
            };
        } catch (error) {
            console.log(`Error fetching data: ${error}`);
        }
    };

    /**
     * Gets any resource that matches the node, using the provided Namespace
     * @param {string} node The name of the predicate to be applied using the provided Namespace
     * @param {$rdf.namespace} namespace The RDF Namespace
     * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
     */
    private getValueFromNamespace(node: string, namespace: any, webId?: string): string | any {
        const store = this.store.any($rdf.sym(webId || this.session.webId), namespace(node));
        if (store) {
            return store.value;
        }
        return '';
    }

    // * * * * * * * * * * * * * * * * * * * * * //
    // Our methods go down here :D
    //
    //  |   |   |   |   |   |   |
    //  v   v   v   v   v   v   v

    async getProfileField(field: string): Promise<string> {
        return await this.getField(this.session.webId, field, VCARD);
    }


    /**
     * This method is used for retrieving the value of a field as an string.
     * @param webId WebId of the resource from where the field is going to be retrieved.
     * @param field Field to retrieve from the resource.
     * @param namespace Namespace to which the field belongs.
     */
    async getField(webId: string, field: string, namespace: any): Promise<string> {
        try {
            const id = await this.store.sym(webId);
            await this.fetcher.load(id.doc(), {force: true, clearPreviousData: true});
            const element = this.store.any(id, namespace(field));
            if (element !== undefined) {
                return element.value;
            } else {
                return element;
            }
        } catch (err) {
            console.log(`Error while fetching data ${err}`);
        }
    }

    /**
     * This method is used for retrieving data as an array.
     * @param webId WebId from  which the data is going to be retrieved.
     * @param field Field that is going to be retrieved from the resource.
     * @param namespace Name space to which the field belongs.
     */
    async getFieldArray(webId: string, field: string, namespace: any): Promise<NamedNode[]> {
        try {
            const id = await this.store.sym(webId);
            await this.fetcher.load(id.doc(), {force: true, clearPreviousData: true});
            return this.store.each(id, namespace(field));
        } catch (err) {
            console.log(`Error while fetching data:  ${err}`);
        }
    }

    async getFriendData(webId: string) {
        try {

            console.log('Profile loaded: ' + await this.getField(webId, 'fn', VCARD));
            return {
                fn: await this.getField(webId, 'fn', VCARD),
                company: await this.getField(webId, 'organization-name', VCARD),
                phone: await this.getFriendPhone(webId),
                role: await this.getField(webId, 'role', VCARD),
                image: await this.getField(webId, 'hasPhoto', VCARD),
                address: await this.getFriendAddress(webId),
                email: await this.getFriendEmail(webId),
            };
        } catch (error) {
            console.log(`Error fetching data: ${error}`);
        }
    }

    async getChatData(chatUrl: string) {
        try {
            console.log('Chat loaded: ' + await this.getField(chatUrl, 'name', SCHEMA));
            return {
                id: await this.getField(chatUrl, 'identifier', SCHEMA),
                name: await this.getField(chatUrl, 'name', SCHEMA),
                administrators: await this.getFieldArray(chatUrl, 'author', SCHEMA),
                users: await this.getFieldArray(chatUrl, 'contributor', SCHEMA),
                picture: await this.getField(chatUrl, 'image', SCHEMA),
            };
        } catch (error) {
            console.log(`Error fetching data : ${error}`);
        }
    }

    async getMessageData(messageUrl: string) {
        try {
            const identifier = await this.getField(messageUrl, 'identifier', SCHEMA);
            console.log(`Message loaded: ${identifier}`);
            return {
                id: identifier.split('/')[2],
                chatId: identifier.split('/')[0],
                bundleId: identifier.split('/')[1],
                message: await this.getField(messageUrl, 'text', SCHEMA),
                sender: await this.getField(messageUrl, 'sender', SCHEMA),
                date: await this.getField(messageUrl, 'dateSent', SCHEMA),
            };
        } catch (error) {
            console.log(`Error fetching data: ${error}`);
        }
    }

    async requestIsChat(webId: string): Promise<boolean> {
        try {
            const file = await this.getFieldArray(webId, 'type', RDF);
            return file.includes(SCHEMA('Conversation'));
        } catch (err) {
            console.log(`Error while fetching data ${err}`);
        }
    }

    // Function to get email. This returns only the first email, which is temporary
    getFriendEmail = async (webId: string) => {
        const linkedUri = await this.getField(webId, 'hasEmail', VCARD);

        if (linkedUri) {
            const mail = await this.getField(linkedUri, 'value', VCARD);
            return mail.split('mailto:')[1];
        }

        return '';
    };

    // Function to get phone number. This returns only the first phone number, which is temporary. It also ignores the type.
    getFriendPhone = async (webId: string) => {
        const linkedUri = await this.getField(webId, 'hasTelephone', VCARD);

        if (linkedUri) {
            const mail = await this.getField(linkedUri, 'value', VCARD);
            const phone = mail.split('tel:')[1];
            return phone;
        }

        return '';
    };

    getFriendAddress = async (webId: string) => {
        const linkedUri = await this.getField(webId, 'hasAddress', VCARD);

        if (linkedUri) {
            return {
                locality: await this.getField(linkedUri, 'locality', VCARD),
                country_name: await this.getField(linkedUri, 'country-name', VCARD),
                region: await this.getField(linkedUri, 'region', VCARD),
                street: await this.getField(linkedUri, 'street-address', VCARD),
            };
        }

        return {};
    };

    /**
     * This method is used for adding a new friend from your solid profile
     * @param webId WebId of the friend to add.
     */
    addFriend(webId: string) {
        const me = $rdf.sym(this.session.webId);
        const friend = $rdf.sym(webId);
        const toBeInserted = $rdf.st(me, FOAF('knows'), friend, me.doc());
        this.updateManager.update([], toBeInserted, (response, success, message) => {
            if (success) {
                this.toastr.success('Friend added', 'Success!');
            } else {
                this.toastr.error('Message: ' + message, 'An error has occurred');
            }
        });
    }

    /**
     * This method is used to remove a friend from your solid profile.
     * @param webId webId of the friend to remove
     */
    removeFriend(webId: string) {
        const me = $rdf.sym(this.session.webId);
        const friend = $rdf.sym(webId);
        const toBeInserted = $rdf.st(me, FOAF('knows'), friend, me.doc());
        this.updateManager.update(toBeInserted, [], (response: any, success: any, message: string) => {
            if (success) {
                this.toastr.success('Friend removed', 'Success!');
            } else {
                this.toastr.error('Message: ' + message, 'An error has occurred');
            }
        });
    }

    async getContacts(): Promise<NamedNode[]> {
        return this.getFieldArray(this.getWebID(), 'knows', FOAF);
    }

    getWebID() {
        return this.session.webId;
    }

    getUserName() {
        return this.getField(this.getWebID(), 'fn', VCARD);
    }

    getProfilePicture() {
        return this.getField(this.getWebID(), 'hasPhoto', VCARD);
    }

}
