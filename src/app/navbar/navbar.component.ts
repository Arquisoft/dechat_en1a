import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/dechat/user.service';
import { AuthService } from '../services/solid/solid.auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName :string;

  constructor(
    private auth : AuthService,
    //private user : UserService
  ) { }

  ngOnInit() {
    /*if (this.auth.isSessionActive()) {
      this.userName = this.user.getUserName();
    }*/
  }

}
