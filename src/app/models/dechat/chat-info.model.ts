import { User } from "./user.model";

export class ChatInfo {

    chatId: string;
    
    chatName: string;
    chatImage: string;

    users: User[];
    administrators: User[];

    unreadCount?: Number; // TODO Honestly I don't know how the hell we're gonna do this
    status?: string;

    constructor(id:string) {
        this.chatId = id;
        this.users = [];
        this.administrators = [];
    }


}