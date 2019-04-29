import { ChatInfo } from './chat-info.model';
import { ChatMessage } from './chat-message.model';

export enum InboxElementType {
    CHAT_REQUEST,
    NEW_MESSAGE,
}

export class InboxElement {

    chat: ChatInfo;
    message: ChatMessage;
    type: InboxElementType;

}
