import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../models/dechat/chat-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeSent: string;
  // isOwnMessage: boolean;

  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.userName = chatMessage.userName;
    this.timeSent = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
  }

}
