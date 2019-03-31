import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../../models/dechat/chat-message.model';

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
  ready: boolean;

  constructor() {
  this.ready = true;
  }

  ngOnInit(chatMessage = this.chatMessage) {
    if (chatMessage == undefined)
      return;
      
    this.messageContent = chatMessage.message;
    this.userName = chatMessage.userName;
    this.timeSent = this.getTimeStamp(chatMessage.date);
  }

  getTimeStamp(date: Date) {

    const day = date.getUTCFullYear() + '/' +
                (date.getUTCMonth() + 1) + '/' +
                date.getUTCDate();

    const time = date.getUTCHours() + ':' +
                date.getUTCMinutes();
    
    return day + ' ' + time;
}

}
