import {Component, OnInit} from '@angular/core';

import {MessageService} from 'src/app/services/dechat/message.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { NewMultimediaDialogComponent } from 'src/app/dialogComponents/new-multimedia-dialog/new-multimedia-dialog.component';

@Component({
    selector: 'app-chat-form',
    templateUrl: './chat-form.component.html',
    styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

    // Attributes //
    message: string; // Corresponds to the ng bingding in the html <input/>

    // Constructor //
    constructor(private messageService: MessageService, private dialog: MatDialog) {
        this.message = '';
    }

    ngOnInit() {
    }

    // Methods //

    send() {

        this.message = this.message.trim();
        if (this.message.length <= 0) {
            return;
        }

        this.messageService.sendMessage(this.message);

        /*
         *  TODO: Send the multimedia (or null if there is no multimedia) 
         *          to the message service.
         * 
         *        Something like: 
         *          this.messageService.sendMultimedia(this.multimedia);
         * 
         */

        this.message = '';
    }

    // Called every time a key is pressed (keydown event)
    handleSubmit(event) {

        // Dear future me: === means same value and type.
        if (event.keyCode === 13) {
            this.send();
        }
    }

    multimedia() {
        // Open a dialog to add multimedia to the message
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
    
        var dialogRef = this.dialog.open(NewMultimediaDialogComponent, dialogConfig);

        // TODO: This dialog has to return the created multimedia
    }

}
