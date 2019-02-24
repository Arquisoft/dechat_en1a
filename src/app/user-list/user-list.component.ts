import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/dechat/chat.service';
import { User } from '../models/dechat/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(chat: ChatService) {
    this.users = [];
    this.users = this.getDummies();
  }

  ngOnInit() {
  }



  // TODO erase this
  getDummies() : User[] {

    var result = [];
    var dummy : User;

    dummy = new User();
    dummy.userName = "Dummy 1";
    dummy.status = "online";
    result.push(dummy);

    dummy = new User();
    dummy.userName = "Dummy 2";
    dummy.status = "busy";
    result.push(dummy);

    dummy = new User();
    dummy.userName = "Dummy 3";
    dummy.status = "offline";
    result.push(dummy);

    return result;
  }
}
