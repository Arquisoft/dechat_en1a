import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {ChatInfo} from 'src/app/models/dechat/chat-info.model';
import {User} from 'src/app/models/dechat/user.model';
import {RdfService} from '../solid/rdf.service';
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

    /**
     * User of the application.
     *
     * @type {User}
     */
    user: User;
    userName: Observable<string>;

    /**
     * All the chats available for the user.
     *
     * @type {ChatInfo[]}
     */
    allChats: ChatInfo[];

    /**
     * The chat in which the user is currently
     * participating.
     *
     * @type {ChatInfo}
     */
    currentChat: ChatInfo;

    // Constructor //

    /**
     * Creates a chat service.
     *
     * @param userService
     *          The users service.
     * @param files
     *          The files service.
     * @param messages
     *          The messages service.
     * @param inbox
     *          The inbox service.
     */
    constructor(
        private userService: UserService,
        private files: FilesService,
        private messages: MessageService,
        private inbox: InboxService,
        private rdf: RdfService,
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

    /**
     * Sets up the chat service. It sets the current user,
     * gets their contacts, checks their files for the chats, and
     * fetches all the chats from their POD.
     */
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

    /**
     * Given a ChatInfo object, we will open the chat
     */
    async openChat(chatInfo: ChatInfo): Promise<void> {

        this.messages.setCurrentChat(chatInfo);
        this.currentChat = chatInfo;

        // Update file system
        this.files.checkChatFolder(this.user, chatInfo);
    }

    /**
     * Gets all the chats available to the user.
     */
    getAllChats(): Observable<ChatInfo[]> {
        return of(this.allChats);
    }

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /*                                                           */
    /*                 CHAT CREATION AND EDITION                 */
    /*                                                           */

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /**
     * Checks whether the current user is an administrator
     * of the given chat.
     *
     * @param chat
     *          The given chat.
     */
    isAdmin(chat: ChatInfo): boolean {
        return chat.administrators.includes(this.user);
    }

    /**
     * Normal chats behave the same as group chats, so
     * we create a group chat with just both this user and
     * the other one.
     *
     * @param otherUser
     *           The other user of the chat.
     */
    async createChat(otherUser: User): Promise<ChatInfo> {
        const users = [];
        users.push(otherUser);
        return this.createGroupChat(otherUser.nickname, users);
    }

    /**
     * Creates a chat from a request.
     *
     * @param request
     *          The InboxElement request.
     */
    private async createChatFromRequest(request: InboxElement): Promise<ChatInfo> {

        const chat: ChatInfo = request.chat; //JSON.parse(file);
        this.allChats.push(chat);
        await this.files.checkChatFolder(this.user, chat);
        return chat;
    }

    /**
     * Creates a groupal chat, composed by the current user and other users.
     *
     * @param chatName
     *          The name of the groupal chat.
     * @param otherUsers
     *          An array of users with the components of the group,
     *          except the current user.
     */
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

        //await this.files.checkChatFolder(this.user, chat);

        return chat;
    }

    /**
     * Adds a given user to a given chat.
     *
     * @param chat
     *          The given chat.
     * @param user
     *          The given user.
     */
    addUserToChat(chat: ChatInfo, user: User): boolean {
        if (!this.isAdmin(chat)) {
            return false;
        }

        chat.users.push(user);
        this.inbox.sendChatRequest(user, chat);
        return true;
    }

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /*                                                           */
    /*                        CHAT FETCHING                      */
    /*                                                           */

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /**
     * Fetchs a chat from a given URL.
     *
     * @param chatUrl
     *          The URL of the chat.
     */
    async fetchChat(chatUrl: string): Promise<ChatInfo> {
        console.log('Fetching chat: ' + chatUrl);
        let chat: ChatInfo;
        let id = chatUrl;

        // Get the chat data file, with name and users

        const dataFile = chatUrl + 'data.ttl';
        const file = await this.files.readFile(dataFile);

        if (file.length === 0 || file === undefined) {
            console.log('Something bad happened.');
            this.files.deleteFolder(chatUrl);
            return null;
        }
        const chatInfo = await this.rdf.getChatData(dataFile);
        if (chatInfo === undefined) {
            console.log('Something bad happened.');
            this.files.deleteFolder(chatUrl);
            return null;
        }
        chat = new ChatInfo(chatInfo.id);
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

        // Load messages
        await this.messages.fetchChat(chat);

        return chat;
    }

}
