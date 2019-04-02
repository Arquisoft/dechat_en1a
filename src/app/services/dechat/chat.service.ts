import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {ChatInfo} from 'src/app/models/dechat/chat-info.model';
import {ChatMessage} from 'src/app/models/dechat/chat-message.model';
import {MessageBundle} from 'src/app/models/dechat/message-bundle.model';
import {User} from 'src/app/models/dechat/user.model';
import {FilesService} from './files.service';
import {MessageService} from './message.service';
import {UserService} from './user.service';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    // Attributes //
    user: User;
    userName: Observable<string>;

    allChats: ChatInfo[];

    // We will also store the current chat data
    ready: any[];

    // Constructor //
    constructor(
        private userService: UserService,
        private files: FilesService,
        private messages: MessageService
    ) {

        this.ready = [];
        this.allChats = [];

        this.setUp();
    }

    async setUp() {

        await 1;
        this.user = await this.userService.getUser();
        this.messages.setCurrentUser(this.user);
        const contacts = await this.userService.getContacts();

        this.files.checkUserFiles(this.user);

        console.log('Number of chat contacts = ' + contacts.length);

        contacts.forEach(async (con) => {
            // TODO: Fetch chats, not create them

            // We create a new chat with the contact
            this.allChats.push(this.createChat(con));
        });

    }

    // Given a ChatInfo object, we will open the chat
    async openChat(chatInfo: ChatInfo): Promise<void> {

        this.messages.setCurrentChat(chatInfo);

        if (this.ready.length === 0) {
            this.ready.push(true);
        }

        // Update file system
        this.files.checkChatFolder(chatInfo);
    }

    getAllChats(): Observable<ChatInfo[]> {
        return of(this.allChats);
    }

    isReady(): Observable<boolean[]> {
        return of(this.ready);
    }

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /*                                                           */
    /*                 CHAT CREATION AND EDITION                 */
    /*                                                           */

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    isAdmin(chat: ChatInfo): boolean {
        return chat.administrators.includes(this.user);
    }

    /*
     * Normal chats behave the same as group chats, so
     * we create a group chat with just both this user and
     * the other one.
     */
    createChat(otherUser: User): ChatInfo {
        return this.createGroupChat(otherUser.nickname, [otherUser]);
    }

    createGroupChat(chatName: string, otherUsers: User[]): ChatInfo {
        let chat: ChatInfo;

        // We generate the ID for this chat
        const id = this.generateChatId(otherUsers);
        otherUsers.push(this.user);

        chat = new ChatInfo(id);
        chat.chatName = chatName;
        chat.users.push(this.user);

        this.files.checkChatFolder(chat);

        return chat;
    }

    addUserToChat(chat: ChatInfo, user: User): boolean {
        if (!this.isAdmin(chat)) {
            return false;
        }

        chat.users.push(this.user);
        this.files.checkChatFolder(chat);
        return true;
    }

    // Will generate an identifier for a brand new chat
    private generateChatId(otherUsers: User[]): string {

        // We declare the initial state of the Chat ID and the current date
        let chatId = this.user.nickname;
        const date = this.messages.getFullTimeStamp();

        // We traverse the otherUsers array
        let index;
        for (index = 0; index < otherUsers.length; index++) {
            chatId += '_' + otherUsers[0].nickname;
        }

        // We need to add the current date to the Chat ID
        return chatId + '_' + date;
    }

}
