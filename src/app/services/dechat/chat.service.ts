import { Injectable } from '@angular/core';

import { ChatMessage } from 'src/app/models/dechat/chat-message.model';
import { AuthService } from './auth.service';
import { User } from 'src/app/models/dechat/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // Attributes //
  user : User;
  chatMessage : ChatMessage;
  chatMessages : ChatMessage[]; // TODO get a nice data structure for this
  userName : Observable<string>;

  // Constructor //
  constructor(
    // TODO maybe inject solid stuff here
    // TODO inject auth stuff
  ) {
    // TODO authenticate user object. For now, get a dummy
    this.user = new User();
    this.user.userName = "Test User";

    this.chatMessages = [];
  }



  // Methods //

  sendMessage(msg: string) {

    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();

    var message = new ChatMessage();
    message.message = msg;
    message.timeSent = timestamp;
    message.userName = this.user.userName;
    message.email = email;

    this.chatMessages.push(message);


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
    return this.chatMessages;
  }

}
