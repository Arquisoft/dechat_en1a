import { Injectable } from '@angular/core';
import { FilesService } from './files.service';
import { UserService } from './user.service';
import { User } from 'src/app/models/dechat/user.model';
import { InboxElement } from 'src/app/models/dechat/inbox-element.model';

@Injectable({
  providedIn: 'root'
})
export class InboxService {


  private user : User;
  private newElements : InboxElement[];


  constructor(
    private files : FilesService,
    private users : UserService
  ) {
    this.setUp();
  }


  private async setUp() {
    await 5;

    console.log("Inbox setting up...");
    this.user = await this.users.getUser();
    setInterval(this.checkInbox.bind(this), 2000);
  }



  private async checkInbox() {

    if (this.user == undefined) {
      this.user = await this.users.getUser();
      return;
    }

    var url = this.files.getInboxUrl(this.user);
    var folder = await this.files.readFolder(url).then(
      result => {

        // TODO process the files and ad them to the inboxElements list


    });
  }
}
