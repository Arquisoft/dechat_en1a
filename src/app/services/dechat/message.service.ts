import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MultimediaDisplayComponent} from 'src/app/chatComponents/multimedia-display/multimedia-display.component';
import {ChatInfo} from 'src/app/models/dechat/chat-info.model';
import {ChatMessage} from 'src/app/models/dechat/chat-message.model';
import {Chat} from 'src/app/models/dechat/chat.model';
import {InboxElement, InboxElementType} from 'src/app/models/dechat/inbox-element.model';
import {MessageBundle} from 'src/app/models/dechat/message-bundle.model';
import {Multimedia} from 'src/app/models/dechat/multimedia.model';
import {User} from 'src/app/models/dechat/user.model';
import {RdfService} from '../solid/rdf.service';
import {FilesService} from './files.service';
import {InboxService} from './inbox.service';

@Injectable({
    providedIn: 'root',
})
export class MessageService {

    /**
     * The current user.
     *
     * @type {User}
     */
    user: User;

    /**
     * The chat message.
     *
     * @type {ChatMessage}
     */
    chatMessage: ChatMessage;

    /**
     * The active chat.
     *
     * @type {Chat}
     */
    currentChat: Chat;

    /**
     * The current messages.
     *
     * @type {ChatMessage[]}
     */
    currentMessages: ChatMessage[];

    /**
     * The current multimedia.
     *
     * @type {Multimedia[]}
     */
    currentMultimedia: Multimedia[];

    /**
     * The current message bundle.
     *
     * @type {MessageBundle}
     */
    currentBundle: MessageBundle;

    /**
     * The current chat's URL.
     *
     * @type {string}
     */
    currentChatUrl: string;

    /**
     * We are storing te chats locally in a hash map.
     *
     * string -> ChatInfo.chatID
     *
     * @type {Map<string, Chat>}
     */
    chatMap: Map<string, Chat>;


    /**
     * Creates a message service.
     *
     * @param files
     *          The files service.
     * @param inbox
     *          The inbox service.
     */
    constructor(
        private files: FilesService,
        private inbox: InboxService,
        private rdf: RdfService,
    ) {

        this.currentMessages = [];
        this.chatMap = new Map<string, Chat>();

        this.inbox.addOnElementFoundCallback(
            (element: InboxElement) => {
                if (element.type === InboxElementType.NEW_MESSAGE) {
                    this.createMessageFromRequest(element);
                }
            });
    }


    /**
     * Sets the current user.
     *
     * @param user
     *          The current user.
     */
    setCurrentUser(user: User) {
        this.user = user;
    }

    /**
     * Fetchs the chat given the chat info.
     *
     * @param chatInfo
     *          An object representing the chat information.
     */
    async fetchChat(chatInfo: ChatInfo) {

        console.log('Message Service Fetching chat: ' + chatInfo.chatId);

        if (!this.chatMap.has(chatInfo.chatId)) {
            this.chatMap.set(chatInfo.chatId, new Chat(chatInfo));
        }
        const chat = this.chatMap.get(chatInfo.chatId);
        const chatUrl = this.files.getChatUrl(this.user, chatInfo);
        await this.loadAllMessageBundles(chatUrl, chat);
    }

    /**
     * Sets the current chat.
     *
     * @param chatInfo
     *          An object representing the current chat information.
     */
    async setCurrentChat(chatInfo: ChatInfo) {

        console.log('Message service setting current chat');

        // Clear messages of the previous chat
        while (this.currentMessages.length > 0) {
            this.currentMessages.pop();
        }

        if (!this.chatMap.has(chatInfo.chatId)) {
            this.chatMap.set(chatInfo.chatId, new Chat(chatInfo));
        }
        this.currentChat = this.chatMap.get(chatInfo.chatId);
        this.currentChatUrl = this.files.getChatUrl(this.user, chatInfo);

        // Fetch the bundles up in the pod (add them to the map)
        // And retrieve the existing bundles in the map
        const newBundles = await this.loadAllMessageBundles(this.currentChatUrl, this.currentChat);

        console.log('New bundles added: ' + newBundles);
        const bundles = this.currentChat.getBundles();

        if (bundles.length == 0) {
            console.log('... man, the chat has no bundles');
        }

        await bundles.forEach((b) => {
            console.log('Bundle ' + b.bundleId + ' has ' + b.messages.length + ' messages');
            // Sort them by date
            b.messages = b.messages.sort((a, b) => a.date.getTime() - b.date.getTime());
            b.messages.forEach((m) => this.currentMessages.push(m));
            this.currentBundle = b;
        });
    }

    /**
     * Returns a full time stamp, with the current date and time.
     */
    getFullTimeStamp() {
        const now = new Date();

        const date = now.getUTCFullYear() + '_' +
            (now.getUTCMonth() + 1) + '_' +
            now.getUTCDate();

        const time = now.getUTCHours() + '_' +
            now.getUTCMinutes() + '_' +
            now.getSeconds() + '_' +
            now.getMilliseconds();

        return date + ' ' + time;
    }


    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /*                                                           */
    /*                     MESSAGE MANAGEMENT                    */
    /*                                                           */

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /**
     * Gets the current messages.
     */
    getMessages(): Observable<ChatMessage[]> {
        return of(this.currentMessages);
    }

    /**
     * Sends a multimedia element.
     *
     * @param multimedia
     *          The multimedia element.
     */
    sendMultimedia(multimedia: Multimedia) {
        // We add it to the current multimedia array
        this.currentMultimedia.push(multimedia);
    }

    /**
     * Sends a message given its string.
     *
     * @param msg
     *          The string with the message contents.
     */
    async sendMessage(msg: string) {

        // No bundle!!
        if (this.currentBundle === undefined) {
            this.currentBundle = await this.createBundle(this.currentChat, this.getFullTimeStamp());
        }

        const message = this.createMessage(msg);

        // Add the message to the bundle.
        // Create a new bundle if the current one is full
        if (!this.currentBundle.addMessage(message)) {
            this.currentBundle = await this.createBundle(this.currentChat, this.getFullTimeStamp());
            this.currentBundle.addMessage(message);
        }

        // Push it so we can see it instantly
        this.currentMessages.push(message);

        // Send to the inbox of all users
        this.currentChat.chatInfo.users.forEach(async (user) => {
            try {
                await this.inbox.sendNewMessage(user, this.currentChat.chatInfo, message);
            } catch (err) {
                console.log(err);
            }
        });

        console.log('[Message sent] : ' + msg);
    }

    /**
     * Creates a ChatMessage object given its contents in a string.
     *
     * @param msg
     *          The string with the contents of the message.
     */
    private createMessage(msg: string): ChatMessage {
        const message = new ChatMessage();
        message.message = msg;
        message.userName = this.user.userName;
        message.userUrl = this.user.url;
        message.chatId = this.currentChat.chatInfo.chatId;
        message.bundleId = this.currentBundle.bundleId;
        return message;
    }

    /**
     * Creates a message from an inbox request.
     *
     * @param request
     *          The request in form of a InboxElement.
     */
    private async createMessageFromRequest(request: InboxElement) {

        const msg: ChatMessage = request.message;
        const chatInfo: ChatInfo = this.chatMap.get(msg.chatId).chatInfo;

        if (this.currentChat === undefined) {
            // TODO Increase the unread icon on the chat
            // and create it
            console.log('Undefined current chat!!!!');
        } else if (this.currentChat.chatInfo.chatId === chatInfo.chatId) {
            const existentMsg = this.currentMessages.find((m, index, array) => m.id === msg.id);
            if (existentMsg === undefined) {
                this.currentMessages.push(msg);
            }
        } else {
            this.currentChat.unreadMessageCount++;
        }

        if (!this.chatMap.has(msg.chatId)) {
            console.log('[ERROR] We have received a message and we don\'t have the chat in the map!!!!!!');
            return;
        }

        const chat = this.chatMap.get(msg.chatId);
        let bundle = await chat.getBundle(msg.bundleId);

        if (bundle === undefined) {
            console.log('Undefined bundle. Creating it.');
            this.currentBundle = await this.createBundle(chat, msg.bundleId);
            bundle = this.currentBundle;
        }

        bundle.addMessage(msg);

        // Create the message file in the pod
        let path = await this.files.getChatUrl(this.user, this.currentChat.chatInfo);
        path = path + bundle.bundleId + '/';
        path = path + msg.id + '.ttl';
        console.log('HEEEEEERE: ' + path);
        await this.files.createFile(path, msg.getTtlInfo());
    }

    /**
     * Gets a message from a file given its URL.
     *
     * @param url
     *          The URL of the file.
     */
    private async getMessageFromFile(url: string): Promise<ChatMessage> {
        let msg;
        const messageInfo = await this.rdf.getMessageData(url);
        msg = new ChatMessage(messageInfo.message);
        msg.id = messageInfo.id;
        msg.date = new Date(messageInfo.date);
        msg.userUrl = messageInfo.sender;
        msg.chatId = messageInfo.chatId;
        msg.bundleId = messageInfo.bundleId;
        return msg;
    }


    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /*                                                           */
    /*                     BUNDLE MANAGEMENT                     */
    /*                                                           */

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


    /**
     * Looks at the message bundles in the POD, then it adds them
     * to the map and returns how many of them are new.
     *
     * @param chatUrl
     * @param chat
     */
    async loadAllMessageBundles(chatUrl: string, chat: Chat): Promise<number> {

        console.log('Loading all message bundles in the POD chat folder ' + chatUrl);
        const bundleFolders: string[] = await this.files.readFolderSubfolders(chatUrl);

        if (bundleFolders.length === 0) {
            console.log('The chat has no bundles');
            return 0;
        }
        console.log('Number of bundles in the POD: ' + bundleFolders.length);
        console.log('Number of bundles locally: ' + chat.getBundles().length);

        // TODO some async shit is happening here.
        // Gotta find a way to fix it.

        //bundleFolders = bundleFolders.sort((a, b) => a > b ? 1 : (a == b ? 0 : -1));
        let count = 0;
        await bundleFolders.forEach(async (b) => {
            const result = await this.loadMessageBundle(chat, chatUrl, b);
            console.log('Trying to add bundle');
            if (await chat.addBundle(result)) {
                count++;
                console.log('Bundle added :D');
            }
            console.log('Count = ' + count);
        });

        return count;
    }

    /**
     * Fetches all the messages in a given bundle, and returns
     * the bundle object.
     *
     * @param chat
     *          The given chat.
     * @param chatUrl
     *          The URL of the given chat.
     * @param bundleUrl
     *          The URL of the bundle.
     */
    private async loadMessageBundle(chat: Chat, chatUrl: string, bundleUrl: string): Promise<MessageBundle> {

        console.log('Fetching message bundle.');
        const bundleId = bundleUrl.replace(chatUrl, '').replace('/', '');

        console.log('URL: ' + bundleUrl);
        console.log('ID: ' + bundleId);

        console.log('Getting the bundle.');
        const bundle = await this.getBundle(chat, bundleId);

        // Read all messages inside the bundle folder
        console.log('Reading all messages inside the bundle folder');
        const messageFiles = await this.files.readFolder(bundleUrl);
        await messageFiles.forEach(async (f) => {
            const msg = await this.getMessageFromFile(f);
            await bundle.addMessage(msg);
        });

        return bundle;
    }

    /**
     * Gets a bundle given a chat and the ID of the bundle.
     *
     * @param chat
     *          The given chat.
     * @param bundleId
     *          The ID of the bundle.
     */
    private async getBundle(chat: Chat, bundleId: string): Promise<MessageBundle> {
        var bundle = chat.getBundle(bundleId);
        if (bundle != undefined) {
            return bundle;
        }
        return await this.createBundle(chat, bundleId);
    }

    /**
     * Creates a bundle for a given chat and a given ID.
     *
     * @param chat
     *          The given chat.
     * @param id
     *          The ID of the bundle to be created.
     */
    private async createBundle(chat: Chat, id: string): Promise<MessageBundle> {

        const bundle = new MessageBundle(chat.chatInfo.chatId, id);
        const path = await this.files.getChatUrl(this.user, chat.chatInfo);
        await this.files.checkFolderExistence(path + bundle.bundleId + '/');
        //this.chatMap.get(chatId).addBundle(bundle);
        return bundle;
    }

}
