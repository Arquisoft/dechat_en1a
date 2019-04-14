import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ChatInfo} from 'src/app/models/dechat/chat-info.model';
import {ChatMessage} from 'src/app/models/dechat/chat-message.model';
import {MessageBundle} from 'src/app/models/dechat/message-bundle.model';
import {User} from 'src/app/models/dechat/user.model';
import {FilesService} from './files.service';
import { InboxService } from './inbox.service';
import { InboxElement, InboxElementType } from 'src/app/models/dechat/inbox-element.model';

@Injectable({
    providedIn: 'root'
})
export class MessageService {


    // Huge TODO here
    //
    // Now we are working with json-encoded plain text.
    // This will have to change and use RDF.
    //


    user: User;
    chatMessage: ChatMessage;

    currentChat: ChatInfo;
    currentMessages: ChatMessage[];
    currentBundle: MessageBundle;
    currentChatUrl: string;


    // We will store the chats locally in a hash map
    // This way, we'll be able to directly read messages
    // That have already been fetched.
    // string -> ChatInfo.chatId
    chatMap: Map<string, MessageBundle[]>;
    unreadCountMap: Map<string, number>; // TODO display the count in the UI

    constructor(
        private files: FilesService,
        private inbox : InboxService
    ) {

        this.currentMessages = [];
        this.chatMap = new Map<string, MessageBundle[]>();
        this.unreadCountMap = new Map<string, number>();

        this.inbox.addOnElementFoundCallback(
            (element : InboxElement) => {
                if (element.type == InboxElementType.NEW_MESSAGE)
                    this.createMessageFromRequest(element);
            });
    }

    setCurrentUser(user: User) {
        this.user = user;
    }

    async setCurrentChat(chat: ChatInfo) {

        if (this.currentChat === chat)
            return;

        // Clear messages of the previous chat
        while (this.currentMessages.length > 0) {
            this.currentMessages.pop();
        }
        
        this.currentChat = chat;
        if (!this.chatMap.has(chat.chatId)) {
            this.chatMap.set(chat.chatId, []);
        }
        this.currentChatUrl = await this.files.getChatUrl(this.user, chat);


        // Fetch the bundles up in the pod (add them to the map)
        // And retrieve the existing bundles in the map
        await this.checkAllMessageBundles();
        const bundles = this.chatMap.get(this.currentChat.chatId);

        bundles.forEach((b) => this.processFetchedMessages(b.messages));
    }

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

    getMessages(): Observable<ChatMessage[]> {
        return of(this.currentMessages);
    }

    async sendMessage(msg: string) {

        // No bundle!!
        if (this.currentBundle == undefined)
            this.currentBundle = await this.createBundle(this.currentChat.chatId, this.getFullTimeStamp());
        
        const message = this.createMessage(msg);

        
        // Add the message to the bundle.
        // Create a new bundle if the current one is full
        if (!this.currentBundle.addMessage(message)) {
            this.currentBundle = await this.createBundle(this.currentChat.chatId, this.getFullTimeStamp());
            this.currentBundle.addMessage(message);
        }

        // Push it so we can see it instantly
        this.currentMessages.push(message);

        // Send to the inbox of all users
        this.currentChat.users.forEach(async (user) => {
            this.inbox.sendNewMessage(user, this.currentChat, message);
        });

        console.log('[Message sent] : ' + msg);
    }

    private createMessage(msg: string): ChatMessage {
        const message = new ChatMessage();
        message.message = msg;
        message.userName = this.user.userName;
        message.chatId = this.currentChat.chatId;
        message.bundleId = this.currentBundle.bundleId;
        return message;
    }



    private async createMessageFromRequest(request: InboxElement) {
        
        var msg : ChatMessage = request.message;
        var chat : ChatInfo = request.chat;

        if (this.currentChat == undefined) {
            // Increase the unread icon on the chat
            this.increaseUnreadMessageCount(chat.chatId);
        }
        // Push it so we can see it
        else if (this.currentChat.chatId == chat.chatId) {
            var existentMsg = this.currentMessages.find((m, index, array) => m.id == msg.id);
            if (existentMsg == undefined)
                this.currentMessages.push(msg);
        }
        else {
            this.increaseUnreadMessageCount(chat.chatId);
        }

        
        if (!this.chatMap.has(msg.chatId)) {
            console.log("[ERROR] We have received a message and we don't have the chat in the map!!!!!!");
            // TODO add it to the chat map
            return;
        }

        

        var bundles = this.chatMap.get(msg.chatId);
        var bundle = bundles.find((b, index, array) => b.bundleId == msg.bundleId);
        
        if (bundle == undefined) {
            console.log("Undefined bundle. Creating it.");
            this.currentBundle = await this.createBundle(msg.chatId, msg.bundleId);
            bundle = this.currentBundle;
        }

        bundle.addMessage(msg);

        // Create the message file in the pod        
        var path = await this.files.getChatUrl(this.user, this.currentChat);
        path = path + bundle.bundleId + '/';
        path = path + msg.id + '.txt';
        await this.files.createFile(path, JSON.stringify(msg));
    }





    private processFetchedMessages(messages: ChatMessage[]) {

        // Sort them by date
        messages.sort((a, b) => a.date.getTime() - b.date.getTime());
        messages.forEach((m) => this.currentMessages.push(m));
    }

    private async getMessageFromFile(url: string): Promise<ChatMessage> {
        let msg;
        let json;
        await this.files.readFile(url).then((body) => json = JSON.parse(body));

        // Get all the message data, I guess
        msg = new ChatMessage(json.message);
        return msg;
    }


    private increaseUnreadMessageCount(chatId: string) {
        var count = this.unreadCountMap.get(chatId);
        this.unreadCountMap.set(chatId, count+1);
    }






    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /*                                                           */
    /*                     BUNDLE MANAGEMENT                     */
    /*                                                           */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */



    // Looks at the message bundles in the pod
    async checkAllMessageBundles() {
        console.log("Fetching message bundles in the POD");

        var bundles : string[] = await this.files.readFolderSubfolders(this.currentChatUrl);

        if (bundles.length == 0)
            return;

        bundles.sort((a, b) => a > b ? 1 : (a == b ? 0 : -1));
        await bundles.forEach(async b => {
            this.currentBundle = await this.fetchMessageBundle(b);
        });
    }

    // Fetches all the messages in a given bundle.
    // Returns the bundle object.
    private async fetchMessageBundle(bundleUrl: string) : Promise<MessageBundle>{

        console.log("Fetching message bundle.");

        var bundleId = bundleUrl.replace(this.currentChatUrl, '').replace('/', '');

        console.log("URL: " + bundleUrl);
        console.log("ID: " + bundleId);

        var bundle = await this.getBundle(bundleId);

        // Read all messages inside the bundle folder
        await this.files.readFolder(bundleUrl).then(
            async (files) => await files.forEach(async (f) => {
                await this.getMessageFromFile(f);
            }),
        );

        this.processFetchedMessages(bundle.messages);
        this.chatMap.get(this.currentChat.chatId).push(bundle);

        return bundle;
    }







    private async getBundle(bundleId: string): Promise<MessageBundle> {
        this.chatMap.get(this.currentChat.chatId).forEach((bundle) => {
            if (bundle.bundleId === bundleId) {
                return bundle;
            }
        });
        return this.createBundle(this.currentChat.chatId, bundleId);
    }

    private async createBundle(chatId: string, id: string): Promise<MessageBundle> {

        const bundle = new MessageBundle(chatId, id);

        /*
        // Check the existence in all pods in the chat
        chat.users.forEach(async (user) => {
            const path = await this.files.getChatUrl(this.user, this.currentChat);
            this.files.checkFolderExistence(path + bundle.bundleId + '/');
        });
        */
        const path = await this.files.getChatUrl(this.user, this.currentChat);
        await this.files.checkFolderExistence(path + bundle.bundleId + '/');
        

        this.chatMap.get(chatId).push(bundle);

        return bundle;
    }

}
