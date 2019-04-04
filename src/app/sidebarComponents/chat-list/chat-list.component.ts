import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChatService } from '../../services/dechat/chat.service';
import { ChatInfo } from 'src/app/models/dechat/chat-info.model';
import { Observable } from 'rxjs';

import { MatDialog, MatDialogConfig } from "@angular/material";
import { NewChatDialogComponent } from 'src/app/dialogComponents/new-chat-dialog/new-chat-dialog.component';


@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit, OnChanges {
  
  chatInfos: Observable<ChatInfo[]>;

  constructor(
    private chatService: ChatService,
    private dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.update();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }

  
  update() : void {
    this.chatInfos = this.chatService.getAllChats();
  }

  newChat() {
    // TODO
    // open a dialog to create a new chat
    var dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    var dialogRef = this.dialog.open(NewChatDialogComponent, dialogConfig);
    
  }


}
