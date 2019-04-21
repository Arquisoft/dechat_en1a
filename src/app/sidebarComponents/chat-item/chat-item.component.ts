import { Component, OnInit, Input } from '@angular/core';
import { ChatInfo } from 'src/app/models/dechat/chat-info.model';
import { ChatService } from 'src/app/services/dechat/chat.service';


@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {

  // Properties

  /**
   * Represents a chat info element.
   * 
   * @type {ChatInfo}
   */
  @Input() chatInfo: ChatInfo;
  

  // Constructor

  /**
   * Creates a ChatItemComponent
   * 
   * @param chatService 
   *          The chat service.
   */
  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  /**
   * Checks wether the current chat is active or not.
   */
  isActive() {
    if (this.chatService.currentChat == this.chatInfo)
      return "activeChatItem";
    return "chatItem";
  }

  /**
   * Opens the chat.
   */
  openChat() {
    console.log("Oppening chat with " + this.chatInfo.chatName);
    this.chatService.openChat(this.chatInfo);
  }
}
