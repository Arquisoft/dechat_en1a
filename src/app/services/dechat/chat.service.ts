import { Injectable } from '@angular/core';

import { ChatMessage } from 'src/app/models/dechat/chat-message.model';
import { AuthService } from './auth.service';
import { User } from 'src/app/models/dechat/user.model';
import { Observable } from 'rxjs';
import { ChatInfo } from 'src/app/models/dechat/chat-info.model';
import { Chat } from 'src/app/models/dechat/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  static readonly ON_CHAT_START : string = "onChatStart";


  // Attributes //
  user : User;
  chatMessage : ChatMessage;
  userName : Observable<string>;



  // We will store the chats locally in a hash map
  // This way, we'll be able to directly read messages
  // That have already been fetched.
  chatMap : Map<ChatInfo, Chat>;
  currentChat : Chat;


  // We will create a sort of event system here.
  // We'll store all callbacks in a map using addListener(),
  // and they will be called whenever we like
  callbacks : Map<string, Function[]>;




  // Constructor //
  constructor(
    // TODO maybe inject solid stuff here
    // TODO inject auth stuff
  ) {
    // TODO authenticate user object. For now, get a dummy
    this.user = new User();
    this.user.userName = "Test User";

    this.currentChat = new Chat();
    this.currentChat.info = new ChatInfo();
    this.currentChat.info.user = new User();
    this.currentChat.messages = [];

    this.chatMap = new Map<ChatInfo, Chat>();
    this.callbacks = new Map<string, Function[]>();

  }



  // Methods //

  // Given a ChatInfo object, we will open the chat
  openChat(chatInfo: ChatInfo) : void {

    if (!this.chatMap.has(chatInfo)) {
      this.chatMap.set(chatInfo, this.fetchChat(chatInfo));
    }

    this.currentChat = this.chatMap.get(chatInfo);
    this.warnListeners(ChatService.ON_CHAT_START);
  }

  private fetchChat(chatInfo: ChatInfo) : Chat {
    // TODO
    var c = new Chat();
    c.info = chatInfo;
    c.messages = [];
    return c;
  }





  // Add a callback to be executed for a given event
  addListener(event:string, callback:Function) {
    if (!this.callbacks.has(event))
      this.callbacks.set(event, []);

    this.callbacks.get(event).push(callback);
  }


  private warnListeners(event:string) {

    if (!this.callbacks.has(event))
      return;

    var listeners = this.callbacks.get(event);
    for (var i = 0; i < listeners.length; i ++)
      listeners[i]();
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


  getMessages() {
    // TODO query the database or whatever
    return this.currentChat.messages;
  }




  

}
