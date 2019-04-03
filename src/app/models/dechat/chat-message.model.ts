
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

}
