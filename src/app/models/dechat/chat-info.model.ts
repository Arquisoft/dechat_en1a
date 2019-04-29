import {User} from './user.model';
import {RdfService} from '../../services/solid/rdf.service';

export class ChatInfo {

    chatId: string;

    chatName: string;
    chatImage: string;

    users: User[];
    administrators: User[];

    status?: string;

    constructor(id: string) {
        this.chatId = id;
        this.users = [];
        this.administrators = [];
    }

    getTtlInfo(rdf: RdfService) {
        let data = `@prefix : <#>.
@prefix data: <>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix ldp: <http://www.w3.org/ns/ldp#>.
@prefix schema: <http://schema.org/>.
@prefix chat: <${rdf.getWebID().replace('/profile/card#me', '/private/dechat_en1a/chats/')}${this.chatId}/>.
@prefix chatImage: <${rdf.getWebID().replace('/profile/card#me', '/private/dechat_en1a/chats/')}${this.chatId}/${this.chatImage}>.
`;
        for (let i = 0; i < this.users.length; i++) {
            data += `@prefix u${i}: <${this.users[i].url}>.
`;
        }
        data += `data:
        a schema:Conversation;
        schema:name "${this.chatName}";
        schema:identifier "${this.chatId}";
        schema:image chatImage:;
        `;
        for (let i = 0; i < this.users.length - 1; i++) {
            if (this.administrators.includes(this.users[i])) {
                data += `schema:contributor u${i}:;
        schema:author u${i}:;
        `;
            } else {
                data += `schema:contributor u${i}:;
        `;
            }
        }
        if (this.administrators.includes(this.users[this.users.length - 1])) {
            data += `schema:contributor u${this.users.length - 1}:;
        schema:author u${this.users.length - 1}:.
        `;
        } else {
            data += `schema:contributor u${this.users.length - 1}:.
        `;
        }
        return data;
    }

}
