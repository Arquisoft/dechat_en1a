import {v4 as uuid} from 'uuid';
import {ChatInfo} from './chat-info.model';
import {User} from './user.model';

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

    isMessageFrom(user: User): boolean {
        if (this.userUrl === undefined) {
            return false;
        }
        return this.userUrl === user.url;
    }

    getTtlInfo(): string {
        const msg = `@prefix : <#>.
@prefix schem: <http://schema.org/>.
@prefix s: <${this.userUrl}>.
message:
      a schem:Message;
      schem:sender s:;
      schem:identifier "${this.chatId}/${this.bundleId}/${this.id}";
      schem:text "${this.message}";
      schem:dateSent "${this.date.toISOString()}".
    `;
        return msg;
    }

}
