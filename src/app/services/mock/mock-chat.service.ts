import {Injectable} from '@angular/core';

import { User } from 'src/app/models/dechat/user.model';
import { Observable, of } from 'rxjs';
import { ChatInfo } from 'src/app/models/dechat/chat-info.model';


@Injectable({
    providedIn: 'root'
})
export class MockChatService {


    private allChats: ChatInfo[];


    // Constructor //
    constructor() {  
        this.allChats = [];
    }



    async openChat(chatInfo: ChatInfo) : Promise<void> {

        
    }

    getAllChats(): Observable<ChatInfo[]> {
        return of(this.allChats);
    }



    isAdmin(chat: ChatInfo): boolean {
        return true;
    }


    async createChat(otherUser: User): Promise<ChatInfo> {
        return new ChatInfo("new-chat");
    }



    async createGroupChat(chatName: string, otherUsers: User[]): Promise<ChatInfo> {
        return new ChatInfo("new-chat");
    }


    addUserToChat(chat: ChatInfo, user: User) : boolean {
        if (!this.isAdmin(chat))
            return false;

        chat.users.push(user);
        return true;
    }


    

    async fetchChat(chatUrl : string) : Promise<ChatInfo> {
        return new ChatInfo("new-chat");
    }

}
