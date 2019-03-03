import { User } from "./user.model";

export class ChatInfo {
    user: User;
    unreadCount?: Number;
    status?: string;
}