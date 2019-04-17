import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/dechat/user.model';

@Component({
  selector: 'app-user-display-slot',
  templateUrl: './user-display-slot.component.html',
  styleUrls: ['./user-display-slot.component.css']
})
export class UserDisplaySlotComponent implements OnInit {

  @Input() user: User;

  userName : string;
  // TODO picture

  constructor() { }

  ngOnInit(user = this.user) {
    if (user == undefined) {
      user = new User("dummy");
    }
    this.userName = user.nickname;
  }

}
