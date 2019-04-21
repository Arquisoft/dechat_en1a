import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { currentSession } from 'solid-auth-client';

// Services
import { AuthService } from '../services/solid/solid.auth.service';

class Session {

  // Constructor

  /**
   * Creates a Session object.
   */
  constructor() {}


  // Properties

  /**
   * Represents the WebID of the session.
   * 
   * @type {string}
   */
  webId: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Properties

  /**
   * Represents the current session.
   * 
   * @type {Session}
   */
  session: Session = new Session();


  // Constructor

  /**
   * Creates a DashBoardComponent.
   */
  constructor(private auth: AuthService, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('hello');
    this.loadSession();
  }

  loadSession = async () => {
    // this.session = await currentSession();
  }

  onSignOut = () => {
    this.auth.solidSignOut();
  }

}
