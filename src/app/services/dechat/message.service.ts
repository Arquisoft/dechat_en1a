import { Injectable } from '@angular/core';
import { ChatMessage } from 'src/app/models/dechat/chat-message.model';
import { ChatInfo } from 'src/app/models/dechat/chat-info.model';
import { MessageBundle } from 'src/app/models/dechat/message-bundle.model';
import { FilesService } from './files.service';
import { User } from 'src/app/models/dechat/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  user : User;
  chatMessage : ChatMessage;
  currentMessages : ChatMessage[];
  messageBundle : MessageBundle;
  currentChatUrl : string;

  // We will store the chats locally in a hash map
  // This way, we'll be able to directly read messages
  // That have already been fetched.
  chatMap : Map<ChatInfo, MessageBundle>;


  constructor(private files : FilesService) 
  { 
    this.currentMessages = [];
    this.chatMap = new Map<ChatInfo, MessageBundle>();
  }


  setCurrentUser(user: User) {

  }

  async setCurrentChat(chat: ChatInfo) {

    if (!this.chatMap.has(chat)) {
      this.chatMap.set(chat, await this.fetchMessages(chat));
    }

    var newChat = this.chatMap.get(chat);
    if (this.messageBundle === newChat)
      return;

    this.messageBundle = newChat;
    
    while(this.currentMessages.length > 0)
      this.currentMessages.pop();

    this.messageBundle.messages.forEach(m =>
        this.currentMessages.push(m));
        
    this.currentChatUrl = await this.files.getChatUrl(this.user, chat);
  }



  

  async fetchMessages(chatInfo: ChatInfo) : Promise<MessageBundle> {
    var bundle = new MessageBundle();
    bundle.info = chatInfo;
    bundle.messages = [];

    var path = await this.files.getChatUrl(this.user, chatInfo);
    await this.files.readFolder(path).then(async files => await
        files.forEach(async f => { 
          bundle.messages.push(await this.getMessageFromFile(f));
          await 5;
        })
    );

    return bundle;
  }




  getMessages(): Observable<ChatMessage[]> {
    return of(this.currentMessages);
  }




  sendMessage(msg: string) {

    var message = this.createMessage(msg);

    this.messageBundle.messages.push(message);
    this.currentMessages.push(message);

    this.pushMessage(message);

    console.log("[Message sent] : " + msg);
  }

  private createMessage(msg: string) : ChatMessage {
    var message = new ChatMessage();
    message.message = msg;
    message.userName = this.user.userName;
    return message;
  }

  private pushMessage(msg : ChatMessage) {
    var str = JSON.stringify(msg);
    var path = this.currentChatUrl + this.getFullTimeStamp() + ".txt";
    this.files.createFile(path, str);
  }

  getFullTimeStamp() {
    const now = new Date();

    const date = now.getUTCFullYear() + '_' +
                 (now.getUTCMonth() + 1) + '_' +
                 now.getUTCDate();

    const time = now.getUTCHours() + '_' +
                 now.getUTCMinutes() + '_' +
                 now.getSeconds() + '_' +
                 now.getMilliseconds();
    
    return date + ' ' + time;
  }


  private async getMessageFromFile(url:string) : Promise<ChatMessage> {
    var msg;
    var json;
    await this.files.readFile(url).then(body => json = JSON.parse(body));

    msg = new ChatMessage(json.message);

    return msg;
  }

}
