import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChatService } from '../../services/dechat/chat.service';
import { ChatInfo } from 'src/app/models/dechat/chat-info.model';
import { User } from 'src/app/models/dechat/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class UserListComponent implements OnInit, OnChanges {
  
  chatInfos: Observable<ChatInfo[]>;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.update();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }

  
  update() : void {
    this.chatInfos = this.chatService.getAllChats();
  }


}
