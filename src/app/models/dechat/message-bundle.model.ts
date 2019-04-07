import { ChatInfo } from './chat-info.model';
import { ChatMessage } from './chat-message.model';
import { User } from './user.model';

// Represents an actual chat, storing the message stack
// It has an owner, so the user that owns the bundle
// can controll its existance.
export class MessageBundle {

    MAX_MSG_COUNT = 100;

    chatId: string;
    bundleId: string;
    creationDate: Date;
    messages: ChatMessage[];

    constructor(chatId: string, id: string) {
        this.chatId = chatId;
        this.bundleId = id;
        this.messages = [];
        this.creationDate = new Date();
    }

    addMessage(msg: ChatMessage): boolean {
        if(this.messages.length >= this.MAX_MSG_COUNT)
            return false;
        this.messages.push(msg);
        return true;
    }
}
