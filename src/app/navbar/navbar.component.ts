import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/dechat/user.service';
import { AuthService } from '../services/solid/solid.auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
    /*if (this.auth.isSessionActive()) {
      this.userName = this.user.getUserName();
    }*/
  }

  showProfileIcon() : boolean {
    return this.router.url == '/chat';
  }

}
