import { User } from "./user.model";

export class ChatInfo {

    chatId: string;

    chatName: string;
    chatImage: string;

    users: User[];
    administrators: User[];

    status?: string;

    constructor(id: string) {
        this.chatId = id;
        this.users = [];
        this.administrators = [];
    }


}
