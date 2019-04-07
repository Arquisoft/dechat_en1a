import { Injectable } from '@angular/core';
import { FilesService } from './files.service';
import { UserService } from './user.service';
import { User } from 'src/app/models/dechat/user.model';
import { InboxElement, InboxElementType } from 'src/app/models/dechat/inbox-element.model';
import { ChatInfo } from 'src/app/models/dechat/chat-info.model';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  private user : User;
  private newElements : InboxElement[];

  private onElementFoundCallbacks;


  constructor(
    private files : FilesService,
    private users : UserService
  ) {
    this.newElements = [];
    this.onElementFoundCallbacks = [];
    this.setUp();
  }


  private async setUp() {
    await 5;

    console.log("Inbox setting up...");
    this.user = await this.users.getUser();
    setInterval(this.checkInbox.bind(this), 2000);
  }


  addOnElementFoundCallback(callback) {
    this.onElementFoundCallbacks.push(callback);
  }


  // This function is called periodically.
  // It checks if there exist new files in the inbox.
  private async checkInbox() {

    if (this.user == undefined) {
      this.user = await this.users.getUser();
      return;
    }

    // Read files in inbox
    var url = this.files.getInboxUrl(this.user);
    var newFiles = [];
    var folder = await this.files.readFolder(url).then(
      result => {

        newFiles = result.filter((str, index, array) => str.includes("DeChatEn1a"));
        console.log("INBOX HAS " + newFiles.length + " FILES");
        this.addInboxFiles(newFiles);
    });

    // Process new elements
    this.processNewElements();
  }




  private processNewElements() {
    this.newElements.forEach( element => {
      this.onElementFoundCallbacks.forEach(callback => { callback(element); });
    });
    this.newElements = [];
  }



  // Takes an array of urls and processes the requests
  private async addInboxFiles(files : string[]) {

    for (var i = 0; i < files.length; i ++) {

        var file = await this.files.readFile(files[i]);    
        if (file.length > 0) {
            var inboxElement : InboxElement = JSON.parse(file);
            this.newElements.push(inboxElement);
            console.log("Inbox element pushed: " + inboxElement)
        }
        this.files.deleteFile(files[i]);
    }
  }



  public sendChatRequest(user: User, chat: ChatInfo) {

    var request : InboxElement;
    request = new InboxElement();
    request.chat = chat;
    request.type = InboxElementType.CHAT_REQUEST;

    var inboxUrl = this.files.getInboxUrl(user);
    var filename = inboxUrl + "DeChatEn1a_chatreq_" + chat.chatId + ".txt";

    this.sendRequest(request, filename);
  }


  private sendRequest(inboxElement : InboxElement, filename: string) {
    
    console.log("Sending request...")
    var text = JSON.stringify(inboxElement);
    this.files.createFile(filename, text);
  }


}