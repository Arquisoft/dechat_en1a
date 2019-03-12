import { Injectable } from '@angular/core';

import { ChatMessage } from 'src/app/models/dechat/chat-message.model';
//import { AuthService } from 'src/app/services/solid/solid.auth.service';
import { User } from 'src/app/models/dechat/user.model';
import { Observable, of } from 'rxjs';
import { ChatInfo } from 'src/app/models/dechat/chat-info.model';
import { Chat } from 'src/app/models/dechat/chat.model';
import { UserService } from './user.service';
import { RdfService } from '../solid/rdf.service';
import { FilesService } from './files.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  /*
   * The ChatService has several tasks:
   *
   * - Send and receive messages from the current chat
   * - Creating new chats
   * 
  */


  // Attributes //
  user : User;
  chatMessage : ChatMessage;
  userName : Observable<string>;



  // We will store the chats locally in a hash map
  // This way, we'll be able to directly read messages
  // That have already been fetched.
  chatMap : Map<ChatInfo, Chat>;
  allChats : ChatInfo[];


  // We will also store the current chat data
  ready : any[];
  currentChat : Chat;
  currentChatUrl : String;
  currentMessages : ChatMessage[];




  // Constructor //
  constructor(
    private userService : UserService,
    private rdf : RdfService,
    private files : FilesService
    // TODO maybe inject solid stuff here
    // TODO inject auth stuff
  ) {   

    this.ready = [];
    this.currentChat = null;
    this.currentMessages = [];

    this.chatMap = new Map<ChatInfo, Chat>();
    this.allChats = [];

    this.setUp();
  }

  async setUp() {

    await 1;
    this.user = await this.userService.getUser();
    var contacts = await this.userService.getContacts();
    

    this.files.checkUserFiles(this.user);

    console.log("Number of chat contacts = " + contacts.length);

    contacts.forEach(async c => {
      var chatId = c.url.replace("https://", "").split('.')[0];
      var info = new ChatInfo(chatId);
      info.user = c;
      info.status = "offline";
      this.allChats.push(info);
    });
    

    // Add a couple of dummy chats
    this.allChats.push(this.getDummy("Dummy 1", "online"));
    this.allChats.push(this.getDummy("Dummy 2", "busy"));
    this.allChats.push(this.getDummy("Dummy 3", "offline"));
  }



  // Methods //

  // Given a ChatInfo object, we will open the chat
  async openChat(chatInfo: ChatInfo) : Promise<void> {

    if (!this.chatMap.has(chatInfo)) {
      this.chatMap.set(chatInfo, await this.fetchChat(chatInfo));
    }

    if (this.ready.length == 0)
      this.ready.push(true);
    
    var newChat = this.chatMap.get(chatInfo);
    if (this.currentChat === newChat)
      return;

    this.currentChat = newChat;
    
    while(this.currentMessages.length > 0)
      this.currentMessages.pop();

    this.currentChat.messages.forEach(m =>
        this.currentMessages.push(m));


    // Update file system
    this.files.checkChatFolder(this.user, chatInfo);
    this.currentChatUrl = await this.files.getChatUrl(this.user, chatInfo);
  }


  private async fetchChat(chatInfo: ChatInfo) : Promise<Chat> {
    var c = new Chat();
    c.info = chatInfo;
    c.messages = [];

    var path = await this.files.getChatUrl(this.user, chatInfo);
    await this.files.readFolder(path).then(async files => await
        files.forEach(async f => { 
          c.messages.push(await this.getMessageFromFile(f));
          await 5;
        })
    );

    return c;
  }

  private async getMessageFromFile(url:string) : Promise<ChatMessage> {
    var msg;
    var json;
    await this.files.readFile(url).then(body => json = JSON.parse(body));

    msg = new ChatMessage(json.message);

    return msg;
  }



  getAllChats() : Observable<ChatInfo[]> {
    return of(this.allChats);
  }

  

  // TODO erase this
  private getDummy(userName: string, status: string = "offline") : ChatInfo {

    var dummy : User;
    var info : ChatInfo;

    dummy = new User();
    dummy.userName = userName;
    info = new ChatInfo();
    info.user = dummy;
    info.status = status;
    
    return info;
  }








  sendMessage(msg: string) {

    var message = this.createMessage(msg);

    this.currentChat.messages.push(message);
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


  private getFullTimeStamp() {
    const now = new Date();

    const date = now.getUTCFullYear() + '-' +
                 (now.getUTCMonth() + 1) + '-' +
                 now.getUTCDate();

    const time = now.getUTCHours() + '-' +
                 now.getUTCMinutes() + '-' +
                 now.getSeconds() + '-' +
                 now.getMilliseconds();
    
    return date + ' ' + time;
  }


  getMessages(): Observable<ChatMessage[]> {
    return of(this.currentMessages);
  }

  isReady() : Observable<boolean[]> {
    return of(this.ready);
  }
  






  createChat() {
    // TODO
  }

  createGroupChat() {

  }
  

}
