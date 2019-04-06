import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../../models/dechat/user.model';
import { UserService } from '../../services/dechat/user.service';
import { ChatService } from 'src/app/services/dechat/chat.service';




@Component({
  selector: 'app-new-chat-dialog',
  templateUrl: './new-chat-dialog.component.html',
  styleUrls: ['./new-chat-dialog.component.css']
})
export class NewChatDialogComponent implements OnInit {

  chatName : string;
  users : User[];

  contacts : User[];

  constructor(
    public dialogRef: MatDialogRef<NewChatDialogComponent>,
    private userService : UserService,
    private chatService : ChatService
  ) {
    this.users = [];
    this.contacts = [];
    this.setUp();
  }

  ngOnInit() {
    
  }


  private async setUp() {
    var c = await this.userService.getContacts();
    c.forEach(contact => this.contacts.push(contact));
  }


  onContactClick(contact : User) {
    console.log("You clicked on " + contact.nickname);

    // If he's in, delete him
    for (var i = 0; i < this.users.length; i ++) {
      if (this.users[i] == contact) {
        this.users.splice(i, 1);
        return;
      }
    }
    // Otherwise, add
    this.users.push(contact);
  }

  isContactIn(contact : User) {
    return this.users.includes(contact);
  }





  cancel() {
    this.closeDialog();
  }


  async create() {

    if (this.chatName == undefined)
      return; // TODO warn error

    if (this.users.length == 0)
      return; // TODO warn error
    

    console.log("Creating new chat");
    console.log("Chat name: " + this.chatName);
    // TODO create it and open it

    var chat = this.chatService.createGroupChat(this.chatName, this.users);
    this.chatService.allChats.push(chat);
    this.chatService.openChat(chat);
    
    this.closeDialog();
  }


  private closeDialog() {
    this.dialogRef.close('Dialog closed!');
  }

}
