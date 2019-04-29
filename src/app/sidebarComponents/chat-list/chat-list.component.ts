import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {ChatInfo} from 'src/app/models/dechat/chat-info.model';
import {ChatService} from '../../services/dechat/chat.service';

import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {NewChatDialogComponent} from 'src/app/dialogComponents/new-chat-dialog/new-chat-dialog.component';

@Component({
    selector: 'app-chat-list',
    templateUrl: './chat-list.component.html',
    styleUrls: ['./chat-list.component.css'],
})
export class ChatListComponent implements OnInit, OnChanges {

    // Properties

    /**
     * An observable of all the chats information.
     *
     * @type {Observable<ChatInfo[]>}
     */
    chatInfos: Observable<ChatInfo[]>;

    // Constructor

    /**
     * Creates a ChatListComponent.
     *
     * @param chatService
     *          The chat service.
     * @param dialog
     *          The dialog to create a new chat.
     */
    constructor(
        public dialogRef: MatDialogRef<NewChatDialogComponent>,
        private chatService: ChatService,
        private dialog: MatDialog,
    ) {

    }

    ngOnInit() {
        this.update();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.update();
    }

    /**
     * Updates all the chats information.
     */
    update(): void {
        this.chatInfos = this.chatService.getAllChats();
    }

    /**
     * Creates a new chat.
     */
    newChat() {
        // TODO
        // open a dialog to create a new chat
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        var dialogRef = this.dialog.open(NewChatDialogComponent, dialogConfig);

    }

}
