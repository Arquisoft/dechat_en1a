import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/dechat/user.service';
import {AuthService} from '../services/solid/solid.auth.service';
import { User } from '../models/dechat/user.model';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    /**
     * Creates a NavbarComponent.
     */
    constructor(private router: Router) {
        
    }

    ngOnInit() {
        /*if (this.auth.isSessionActive()) {
          this.userName = this.user.getUserName();
        }*/
    }


    /**
     * Checks wether the profile icon must be shown or not.
     */
    showProfileIcon(): boolean {
        return this.router.url === '/chat';
    }

}
