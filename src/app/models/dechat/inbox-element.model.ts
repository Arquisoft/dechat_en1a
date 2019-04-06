import { ChatInfo } from './chat-info.model';


export enum InboxElementType {
    CHAT_REQUEST, // chatUrl gives us the path to the data.txt file in the creator's pod
    NEW_MESSAGE // chatUrl gives us the path to chat folder in our own pod
}


export class InboxElement {
    
    chat : ChatInfo;
    messageUrl : string;
    type: InboxElementType;
    
}