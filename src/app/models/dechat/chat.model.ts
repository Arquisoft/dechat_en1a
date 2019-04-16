import { User } from "./user.model";
import { ChatInfo } from './chat-info.model';
import { MessageBundle } from './message-bundle.model';
import { ChatMessage } from './chat-message.model';

// Represents a whole chat.
// Keep in mind it will never be uploaded to the pod,
// it's just for local util usage.
export class Chat {

    // TODO use it!

    chatInfo : ChatInfo;
    private bundles : Map<string, MessageBundle>;
    unreadMessageCount : number;

    constructor(chatInfo : ChatInfo) {
        this.chatInfo = chatInfo;
        this.bundles = new Map<string, MessageBundle>();
    }

    addBundle(bundle : MessageBundle) : boolean {
        if (this.bundles.has(bundle.bundleId)) {
            console.log("Failed to add bundle: already existent.");
            return false;
        }
        this.bundles.set(bundle.bundleId, bundle);
        console.log("Bundle added to the Chat.");
        return true;
    }

    getBundles() : MessageBundle[] {
        var result : MessageBundle[] = [];        
        this.bundles.forEach((value, key, map) => result.push(value));        
        return result;
    }

    getBundle(bundleId : string) : MessageBundle {
        if (this.bundles.has(bundleId))
            return undefined;
        return this.bundles.get(bundleId);
    }
}
