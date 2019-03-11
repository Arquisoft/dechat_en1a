
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChatService } from '../../services/dechat/chat.service';
import { ChatMessage } from '../../models/dechat/chat-message.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  
  feed: Observable<ChatMessage[]>;
  
  boolean ready;

  constructor(private chatService: ChatService) { 
  ready = true;
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
