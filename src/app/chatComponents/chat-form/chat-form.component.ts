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

    /**
     * Corresponds to the ng bingding in the html <input/>
     */
    message: string;


    // Constructor //

    /**
     * Creates a ChatFormComponent.
     * Sets the message property to the empty character.
     * 
     * @param messageService
     *          The message service, used for sending messages.
     * @param dialog
     *          The dialog used for asking the user for multimedia details.
     */
    constructor(private messageService: MessageService, private dialog: MatDialog) {
        this.message = '';
    }

    ngOnInit() {
    }

    // Methods //

    /**
     * Sends the message and the multimedia to the message service.
     * 
     * If the message length is equal or lower to zero, no operation will 
     * be performed.
     */
    send() {
        // We trim the message string
        this.message = this.message.trim();

        // If the message lenght is lower or equal to zero, 
        // we stop the execution of this function
        if (this.message.length <= 0) {
            return;
        }

        // We send the message via the message service
        this.messageService.sendMessage(this.message);

        /*
         *  TODO: Send the multimedia (or null if there is no multimedia) 
         *          to the message service.
         * 
         *        Something like: 
         *          this.messageService.sendMultimedia(this.multimedia);
         * 
         */

        // We set the message property to the default empty character
        this.message = '';
    }

    /**
     * Listener for pressed keys (keydown event).  
     */ 
    handleSubmit(event) {
        if (event.keyCode === 13) {
            this.send();
        }
    }

    /**
     * Creates a dialog asking the user for the details of 
     * the multimedia they want to add to the message.
     */
    multimedia() {
        // We configure the dialog
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
    
        // Open a dialog to add multimedia to the message
        var dialogRef = this.dialog.open(NewMultimediaDialogComponent, dialogConfig);

        // TODO: This dialog has to return the created multimedia
    }

}
