import {Injectable} from '@angular/core';
import {ChatInfo} from 'src/app/models/dechat/chat-info.model';
import {ChatMessage} from 'src/app/models/dechat/chat-message.model';
import {InboxElement, InboxElementType} from 'src/app/models/dechat/inbox-element.model';
import {User} from 'src/app/models/dechat/user.model';
import {RdfService} from '../solid/rdf.service';
import {FilesService} from './files.service';
import {UserService} from './user.service';

@Injectable({
    providedIn: 'root',
})
export class InboxService {

    private user: User;
    private newElements: InboxElement[];

    private onElementFoundCallbacks;

    constructor(
        private files: FilesService,
        private users: UserService,
        private rdf: RdfService,
        private userService: UserService,
    ) {
        this.newElements = [];
        this.onElementFoundCallbacks = [];
        this.setUp();
    }

    private async setUp() {
        await 4;

        console.log('Inbox setting up...');
        this.user = await this.users.getUser();
        setInterval(this.checkInbox.bind(this), 500/*2000*/);
    }

    addOnElementFoundCallback(callback) {
        this.onElementFoundCallbacks.push(callback);
    }

    // This function is called periodically.
    // It checks if there exist new files in the inbox.
    private async checkInbox() {

        if (this.user === undefined) {
            this.user = await this.users.getUser();
            return;
        }

        // Read files in inbox
        const url = this.files.getInboxUrl(this.user);
        let newFiles = [];
        const folder = await this.files.readFolder(url).then(
            (result) => {
                newFiles = result.filter((str, index, array) => str.includes('DeChatEn1a'));
                console.log('INBOX HAS ' + newFiles.length + ' FILES');
                this.addInboxFiles(newFiles);
            });

        // Process new elements
        this.processNewElements();
    }

    private processNewElements() {
        this.newElements.forEach((element) => {
            this.onElementFoundCallbacks.forEach((callback) => {
                callback(element);
            });
        });
        this.newElements = [];
    }

    // Takes an array of urls and processes the requests
    private async addInboxFiles(files: string[]) {

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.length > 0) {
                const inboxElement: InboxElement = new InboxElement();
                if (this.rdf.requestIsChat(file)) {
                    const chatInfo = await this.rdf.getChatData(file);
                    const chat = new ChatInfo(chatInfo.id);
                    chat.chatName = chatInfo.name;
                    chat.chatImage = chatInfo.picture;
                    const users = await this.userService.getContacts();
                    users.forEach((user) => {
                        chatInfo.users.forEach((user2) => {
                            if (user.url === user2.value) {
                                chat.users.push(user);
                            }
                        });
                        chatInfo.administrators.forEach((user2) => {
                            if (user.url === user2.value) {
                                chat.administrators.push(user);
                            }
                        });
                    });
                    inboxElement.chat = chat;
                    inboxElement.type = InboxElementType.CHAT_REQUEST;
                }
                this.newElements.push(inboxElement);
                console.log('Inbox element pushed: ' + inboxElement);
            }
            this.files.deleteFile(files[i]);
        }
    }

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /*                                                           */
    /*                         REQUESTS                          */
    /*                                                           */

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    public sendChatRequest(toUser: User, chat: ChatInfo) {

        let request: InboxElement;
        request = new InboxElement();
        request.chat = chat;
        request.type = InboxElementType.CHAT_REQUEST;

        const inboxUrl = this.files.getInboxUrl(toUser);
        const filename = inboxUrl + 'DeChatEn1a_chatreq_' + chat.chatId + '.ttl';

        this.sendRequest(request, filename);
    }

    public sendNewMessage(toUser: User, chat: ChatInfo, message: ChatMessage) {

        let request: InboxElement;
        request = new InboxElement();
        request.chat = chat;
        request.message = message;
        request.type = InboxElementType.NEW_MESSAGE;

        const inboxUrl = this.files.getInboxUrl(toUser);
        const filename = inboxUrl + 'DeChatEn1a_newmsg_' + message.id + '.ttl';

        this.sendRequest(request, filename);
    }

    private sendRequest(inboxElement: InboxElement, filename: string) {
        console.log('Sending request...');
        const text = inboxElement.type === InboxElementType.CHAT_REQUEST ? inboxElement.chat.getTtlInfo(this.rdf) : inboxElement.message.getTtlInfo();
        this.files.createFile(filename, text);
    }

}
