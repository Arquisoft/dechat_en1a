
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChatService } from '../../services/dechat/chat.service';
import { ChatMessage } from '../../models/dechat/chat-message.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  
  feed: any; // TODO give it an actual type once we have decided which structure we use

  constructor(private chatService: ChatService) {

    this.chatService.addListener(ChatService.ON_CHAT_START, this.update.bind(this))
  }

  ngOnInit() {
    this.update();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }

  update() : void {
    this.feed = this.chatService.getMessages();
  }

}
