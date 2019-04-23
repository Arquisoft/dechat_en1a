import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {ChatInfo} from 'src/app/models/dechat/chat-info.model';
import {ChatMessage} from 'src/app/models/dechat/chat-message.model';
import {User} from 'src/app/models/dechat/user.model';
import {FilesService} from './files.service';
import {InboxService} from './inbox.service';
import {MessageService} from './message.service';
import {UserService} from './user.service';

import {InboxElement, InboxElementType} from 'src/app/models/dechat/inbox-element.model';
import {v4 as uuid} from 'uuid';

@Injectable({
    providedIn: 'root',
})
export class ChatService {

    // Attributes //
    user: User;
    userName: Observable<string>;

    allChats: ChatInfo[];
    currentChat: ChatInfo;

    // Constructor //
    constructor(
        private userService: UserService,
        private files: FilesService,
        private messages: MessageService,
        private inbox: InboxService,
    ) {
        this.allChats = [];
        this.setUp();

        this.inbox.addOnElementFoundCallback(
            (element: InboxElement) => {
                if (element.type === InboxElementType.CHAT_REQUEST) {
                    this.createChatFromRequest(element);
                }
            });
    }

    async setUp() {
        await 1;
        this.user = await this.userService.getUser();
        this.messages.setCurrentUser(this.user);
        const contacts = await this.userService.getContacts();

        await this.files.checkUserFiles(this.user);

        console.log('Checking existent chats...');

        const chatFolder = await this.files.getChatsRootUrl(this.user);
        const chats = await this.files.readFolderSubfolders(chatFolder);
        await chats.forEach(async (chat) => {
            const c = await this.fetchChat(chat);
            if (c != null) {
                this.allChats.push(c);
            }
        });

    }

    // Given a ChatInfo object, we will open the chat
    async openChat(chatInfo: ChatInfo): Promise<void> {

        this.messages.setCurrentChat(chatInfo);
        this.currentChat = chatInfo;

        // Update file system
        this.files.checkChatFolder(this.user, chatInfo);
    }

    getAllChats(): Observable<ChatInfo[]> {
        return of(this.allChats);
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
    async createChat(otherUser: User): Promise<ChatInfo> {
        let users = [];
        users.push(otherUser);
        return this.createGroupChat(otherUser.nickname, users);
    }

    private async createChatFromRequest(request: InboxElement): Promise<ChatInfo> {

        let chat: ChatInfo = request.chat; //JSON.parse(file);
        this.allChats.push(chat);
        await this.files.checkChatFolder(this.user, chat);
        return chat;
    }

    async createGroupChat(chatName: string, otherUsers: User[]): Promise<ChatInfo> {
        console.log('Chat service creating new chat: ' + chatName);
        let chat: ChatInfo;

        let id: string = uuid();
        id = id.replace(/-/g, '');
        console.log('New chat id: ' + id);

        chat = new ChatInfo(id);
        chat.chatName = chatName;
        chat.users = otherUsers;
        chat.administrators = [];
        chat.administrators.push(this.user);
        chat.users.push(this.user);

        chat.users.forEach(async (user) => {
            if (user !== this.user) {
                this.inbox.sendChatRequest(user, chat);
            }
        });

        await this.files.checkChatFolder(this.user, chat);

        return chat;
    }

    addUserToChat(chat: ChatInfo, user: User): boolean {
        if (!this.isAdmin(chat)) {
            return false;
        }

        chat.users.push(user);
        this.files.checkChatFolder(user, chat);
        return true;
    }

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /*                                                           */
    /*                        CHAT FETCHING                      */
    /*                                                           */

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    async fetchChat(chatUrl: string): Promise<ChatInfo> {
        console.log('Fetching chat: ' + chatUrl);
        let chat: ChatInfo;
        let id = chatUrl;

        // Get the chat data file, with name and users

        let dataFile = chatUrl + 'data.txt';
        let file = await this.files.readFile(dataFile);

        if (file.length == 0 || file == undefined) {
            console.log('Something bad happened.');
            this.files.deleteFolder(chatUrl);
            return null;
        }
        chat = JSON.parse(file);
        if (chat == undefined) {
            console.log('Something bad happened.');
            this.files.deleteFolder(chatUrl);
            return null;
        }

        // Load messages
        await this.messages.fetchChat(chat);

        return chat;
    }

}
