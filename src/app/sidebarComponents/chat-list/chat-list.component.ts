import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/dechat/chat.service';
import { ChatInfo } from 'src/app/models/dechat/chat-info.model';
import { User } from 'src/app/models/dechat/user.model';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class UserListComponent implements OnInit {

  chatInfos: ChatInfo[];

  constructor(chat: ChatService) {
    this.chatInfos = [];
    this.chatInfos = this.getDummies();
  }

  ngOnInit() {
  }



  // TODO erase this
  private getDummies() : ChatInfo[] {

    var result : ChatInfo[] = []
    
    result.push(this.getDummy("Dummy 1", "online"));
    result.push(this.getDummy("Dummy 2", "busy"));

    for (var i = 3; i < 50; i ++) {
      result.push(this.getDummy("Dummy " + i, "offline"));
    }

    return result;
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
}
