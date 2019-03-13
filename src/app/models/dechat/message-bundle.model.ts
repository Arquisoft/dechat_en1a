import { ChatInfo } from "./chat-info.model";
import { ChatMessage } from "./chat-message.model";

// Represents an actual chat, storing the message stack

export class MessageBundle {
    info: ChatInfo;
    messages: ChatMessage[];
}