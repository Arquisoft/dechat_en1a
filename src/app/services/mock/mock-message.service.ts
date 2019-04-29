import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ChatInfo} from 'src/app/models/dechat/chat-info.model';
import {ChatMessage} from 'src/app/models/dechat/chat-message.model';
import {MessageBundle} from 'src/app/models/dechat/message-bundle.model';
import {User} from 'src/app/models/dechat/user.model';
import { InboxElement, InboxElementType } from 'src/app/models/dechat/inbox-element.model';
import { Chat } from 'src/app/models/dechat/chat.model';

@Injectable({
    providedIn: 'root'
})
export class MockMessageService {


    private user : User;
    private currentMessages : ChatMessage[];

    constructor() {
        this.currentMessages = [];
    }

    setCurrentUser(user: User) {
        this.user = user;
    }


    async fetchChat(chatInfo : ChatInfo) {

        
    }



    async setCurrentChat(chatInfo: ChatInfo) {

       
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







    getMessages(): Observable<ChatMessage[]> {
        return of(this.currentMessages);
    }

    async sendMessage(msg: string) {

        
    }





    // Looks at the message bundles in the pod, adds them
    // to the map and returns how many of them are new
    async loadAllMessageBundles(chatUrl : string, chat: Chat) : Promise<number>{

        return 0;
    }


}
