
import { v4 as uuid } from 'uuid';
import { ChatInfo } from './chat-info.model';

// Contains the data for a single message
export class ChatMessage {

    id: string;

    userUrl: string;
    userName: string;
    message: string;
    date: Date;

    chatId: string;
    bundleId: string;

    constructor(msg: string = '') {
        this.id = uuid();
        this.message = msg;
        this.date = new Date();
    }

}
