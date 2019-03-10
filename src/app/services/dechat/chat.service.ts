import { Injectable } from '@angular/core';

import { ChatMessage } from 'src/app/models/dechat/chat-message.model';
//import { AuthService } from 'src/app/services/solid/solid.auth.service';
import { User } from 'src/app/models/dechat/user.model';
import { Observable, of } from 'rxjs';
import { ChatInfo } from 'src/app/models/dechat/chat-info.model';
import { Chat } from 'src/app/models/dechat/chat.model';

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

  // We will also store the current chat data
  ready : any[];
  currentChat : Chat;
  currentMessages : ChatMessage[];




  // Constructor //
  constructor(
    // TODO maybe inject solid stuff here
    // TODO inject auth stuff
  ) {
    // TODO authenticate user object. For now, get a dummy
    this.user = new User();
    this.user.userName = "Test User";


    this.ready = [];
    this.currentChat = null;
/*
    this.currentChat = new Chat();
    this.currentChat.info = new ChatInfo();
    this.currentChat.info.user = new User();
    this.currentChat.messages = [];
*/
    this.currentMessages = [];

    this.chatMap = new Map<ChatInfo, Chat>();

  }



  // Methods //

  // Given a ChatInfo object, we will open the chat
  openChat(chatInfo: ChatInfo) : void {

    if (!this.chatMap.has(chatInfo)) {
      this.chatMap.set(chatInfo, this.fetchChat(chatInfo));
    }

    if (this.ready.length == 0)
      this.ready.push(true);
      
    this.currentChat = this.chatMap.get(chatInfo);
    
    while(this.currentMessages.length > 0)
      this.currentMessages.pop();

    this.currentChat.messages.forEach(m =>
        this.currentMessages.push(m));

  }

  private fetchChat(chatInfo: ChatInfo) : Chat {
    // TODO
    var c = new Chat();
    c.info = chatInfo;
    c.messages = [];
    return c;
  }






  sendMessage(msg: string) {

    // TODO send it to the current chat

    const timestamp = this.getTimeStamp();
    const email = this.user.email;

    var message = new ChatMessage();
    message.message = msg;
    message.timeSent = timestamp;
    message.userName = this.user.userName;
    message.email = email;

    this.currentChat.messages.push(message);
    this.currentMessages.push(message);

    console.log("[Message sent] : " + msg);
  }

  getTimeStamp() {
    const now = new Date();

    const date = now.getUTCFullYear() + '/' +
                 (now.getUTCMonth() + 1) + '/' +
                 now.getUTCDate();

    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes();
    
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
