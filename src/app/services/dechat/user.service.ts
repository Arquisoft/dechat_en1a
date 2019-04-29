import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from 'src/app/models/dechat/user.model';
import {SolidProfile} from 'src/app/models/solid/solid-profile.model';
import {RdfService} from '../solid/rdf.service';
import {AuthService} from '../solid/solid.auth.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    /**
     * Solid profile of the user.
     *
     * @type {SolidProfile}
     */
    private profile: SolidProfile;

    /**
     * If the profile is being loaded or not.
     *
     * @type {boolean}
     */
    private loadingProfile: boolean;

    /**
     * If the profile has finished loading or not.
     *
     * @type {boolean}
     */
    private profileLoaded: boolean;

    /**
     * User of the application.
     *
     * @type {User}
     */
    private user: User;

    /**
     * Contacts of the user.
     *
     * @type {User[]}
     */
    private contacts: User[];


    /**
     * Creates an user service.
     *
     * @param rdf
     *          The RDF service.
     * @param auth
     *          The authentication service.
     */
    constructor(private rdf: RdfService, private auth: AuthService) {

        console.log('User service constructor');
        this.user = null;
        this.loadingProfile = true;
        this.profileLoaded = false;
        this.contacts = [];
        this.loadProfile();

        // Clear cached profile data
        // TODO: Remove this code and find a better way to get the old data
        localStorage.removeItem('oldProfileData');
    }


    /**
     * Loads the profile from the rdf service and handles the response
     */
    async loadProfile() {

        if (this.profileLoaded) {
            return;
        }

        if (!this.loadingProfile) {
            return;
        }

        try {
            this.loadingProfile = true;
            const profile = await this.rdf.getProfile();
            if (profile) {
                this.profile = profile;
                this.auth.saveOldUserData(profile);
            }

            this.loadingProfile = false;
            this.profileLoaded = true;
            if (this.profile) {
                this.setupFromProfile();
            } else {
                this.setupDefault();
            }

        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    /**
     * Sets up the user by means of the RDF service and the profile.
     */
    private setupFromProfile() {

        this.user = new User(this.rdf.getWebID());
        this.user.url = this.rdf.getWebID();
        this.user.userName = this.profile.fn;
        this.user.status = 'online';
        this.user.profileImage = this.profile.image ? this.profile.image : '/assets/images/profile.png';
        this.loadContacts();
        console.log('contacts loaded');
    }

    /**
     * Loads the default user.
     */
    private setupDefault() {
        console.log('UserService failed fetching user data. Loading default user.');
        this.user = new User('');
    }

    /**
     * Loads the contacts of the user.
     */
    private async loadContacts() {
        console.log('Fetching contacts...');

        const contacts = await this.rdf.getContacts();
        console.log('Contact count = ' + contacts.length);

        await contacts.forEach(async (element) => {
            const c = new User(element.value);
            console.log('Contact: ' + c.nickname);

            const friendInfo = await this.rdf.getFriendData(element.value);
            if (friendInfo) {
                c.userName = friendInfo.fn;
                c.profileImage = friendInfo.image ? friendInfo.image : '/assets/images/profile.png';
            }

            if (!this.contacts.map(c => c.url).includes(c.url)) {
                this.contacts.push(c);
            }
        });
    }


    /**
     * Gets the user of the application.
     */
    async getUser(): Promise<User> {
        await this.loadProfile();
        return this.user;
    }

    /**
     * Gets the name of the user.
     */
    async getUserName(): Promise<string> {
        await this.loadProfile();
        return this.user.userName;
    }

    /**
     * Gets the profile image of the user.
     */
    async getProfileImage(): Promise<string> {
        await this.loadProfile();
        return this.user.profileImage;
    }

    /**
     * Gets the contacts of the user.
     */
    async getContacts(): Promise<User[]> {
        if (this.profileLoaded = true) {
            return this.contacts;
        }
        await this.loadProfile();
        return this.contacts;
    }

}
