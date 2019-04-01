// Contains the data for a single message
export class ChatMessage {
    userUrl: string;
    userName: string;
    message: string;
    date: Date;

    constructor(msg: string = '') {
        this.message = msg;
        this.date = new Date();
    }

    toString(): string {
        const str = ':' + this.date.toISOString() +
            'a schem:Message;' +
            'schem:sender s:me;' +
            'schem:text ' + this.message + ';' +
            'schem:dateSent ' + this.date.toISOString() + '.';
        return str;
    };

}
