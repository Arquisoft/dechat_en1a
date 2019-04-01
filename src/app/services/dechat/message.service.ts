import {Injectable} from '@angular/core';
import {ChatMessage} from 'src/app/models/dechat/chat-message.model';
import {ChatInfo} from 'src/app/models/dechat/chat-info.model';
import {MessageBundle} from 'src/app/models/dechat/message-bundle.model';
import {FilesService} from './files.service';
import {User} from 'src/app/models/dechat/user.model';
import {Observable, of} from 'rxjs';
import {RdfService} from '../solid/rdf.service';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    user: User;
    chatMessage: ChatMessage;

    currentChat: ChatInfo;
    currentMessages: ChatMessage[];
    currentBundle: MessageBundle;
    currentChatUrl: string;

    // We will store the chats locally in a hash map
    // This way, we'll be able to directly read messages
    // That have already been fetched.
    chatMap: Map<ChatInfo, MessageBundle[]>;


    constructor(private files: FilesService, private rdf: RdfService) {
        this.currentMessages = [];
        this.chatMap = new Map<ChatInfo, MessageBundle[]>();
    }


    setCurrentUser(user: User) {
        this.user = user;
    }

    async setCurrentChat(chat: ChatInfo) {

        if (this.currentChat === chat) {
            return;
        }
        this.currentChat = chat;

        if (!this.chatMap.has(chat)) {
            this.chatMap.set(chat, []);
        }

        // Clear current messaged
        while (this.currentMessages.length > 0) {
            this.currentMessages.pop();
        }

        this.currentChatUrl = await this.files.getChatUrl(this.user, chat);

        // Retrieve the existing bundles in the map
        const bundles = this.chatMap.get(this.currentChat);
        bundles.forEach(b => this.processFetchedMessages(b.messages));

        await this.fetchMessageBundles();

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


    sendMessage(msg: string) {

        const message = this.createMessage(msg);

        // Add the message to the bundle.
        // Create a new bundle if the current one is full
        if (!this.currentBundle.addMessage(message)) {
            this.currentBundle = this.createBundle(this.getFullTimeStamp());
            this.currentBundle.addMessage(message);
        }

        this.currentMessages.push(message);
        this.pushMessage(message);

        console.log('[Message sent] : ' + msg);
    }


    private createMessage(msg: string): ChatMessage {
        const message = new ChatMessage();
        message.message = msg;
        message.userName = this.user.userName;
        return message;
    }

    private pushMessage(msg: ChatMessage) {
        const str = JSON.stringify(msg);

        // Push it inside a bundle in all pods of the chat
        this.currentChat.users.forEach(async user => {
            const chatPath = await this.files.getChatUrl(this.user, this.currentChat) + 'messages.ttl';
            let fileContent = this.files.readFile(chatPath).then(result => fileContent = result);
            fileContent += '\n' + str;

            this.files.updateFile(chatPath, str);
        });
    }


    private processFetchedMessages(messages: ChatMessage[]) {

        // TODO sorth them
        messages.sort((a, b) => a.date.getTime() - b.date.getTime());

        messages.forEach(m => this.currentMessages.push(m));
    }


    private async getMessagesFromChat(chat: ChatInfo): Promise<Array<ChatMessage>> {
        const chatMessages: ChatMessage [] = [];
        await this.rdf.getFileContent(chat.chatId).then(result => result.forEach(message => {
            const mes: ChatMessage = new ChatMessage();
            mes.userName = this.rdf.getValueFromSchema('sender', message.value);
            mes.message = this.rdf.getValueFromSchema('text', message.value);
            mes.date = this.rdf.getValueFromSchema('dateSent', message.value);
            chatMessages.push(mes);
        }));

        return chatMessages;
    }


    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /*                                                           */
    /*                     BUNDLE MANAGEMENT                     */
    /*                                                           */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


    // TODO fetch messages in bundles
    async fetchMessageBundles() {

        // TODO for each folder in the chat folder, create  bundle
        await this.files.readFolder(this.currentChatUrl).then(
            // TODO check if they already exist
            async files => await files.forEach(async f => {
                await this.fetchMessageBundle(f);
            })
        );

    }

    // Feteches all the messages in a given bundle.
    private async fetchMessageBundle(bundleUrl: string) {

        const id = bundleUrl.replace(this.currentChatUrl, '').replace('/', '');
        const bundle = this.getBundle(id);

        // Read all messages inside the bundle folder
        await this.files.readFolder(bundleUrl).then(
            async files => await files.forEach(async f => {
                await this.getMessageFromFile(f);
            })
        );

        this.processFetchedMessages(bundle.messages);
        this.chatMap.get(this.currentChat).push(bundle);
    }


    private getBundle(bundleId: string): MessageBundle {
        this.chatMap.get(this.currentChat).forEach(bundle => {
            if (bundle.bundleId === bundleId) {
                return bundle;
            }
        });

        return this.createBundle(bundleId);
    }

    private createBundle(id: string): MessageBundle {
        const bundle = new MessageBundle(this.currentChat, id);

        // Check the existence in all pods in the chat
        this.currentChat.users.forEach(async user => {
            const path = await this.files.getChatUrl(this.user, this.currentChat);
            this.files.checkFolderExistence(path + bundle.bundleId + '/');
        });

        return bundle;
    }

}
