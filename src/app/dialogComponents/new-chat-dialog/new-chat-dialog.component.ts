import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ChatService} from 'src/app/services/dechat/chat.service';
import {User} from '../../models/dechat/user.model';
import {UserService} from '../../services/dechat/user.service';

@Component({
    selector: 'app-new-chat-dialog',
    templateUrl: './new-chat-dialog.component.html',
    styleUrls: ['./new-chat-dialog.component.css'],
})
export class NewChatDialogComponent implements OnInit {

    // Properties

    /**
     * The name of the new chat.
     *
     * @type {string}
     */
    chatName: string;

    /**
     * The users participating on the new chat.
     *
     * @type {User[]}
     */
    users: User[];

    /**
     * The contacts of the current user of the application.
     *
     * @type {User[]}
     */
    contacts: User[];

    // Constructor

    /**
     * Creates a NewChatDialogComponent.
     * Sets the users and contacts arrays to empty arrays.
     * Gets the contacts of the current user.
     *
     * @param dialogRef
     *          The reference of the dialog.
     * @param data
     * @param userService
     *          The user service.
     * @param chatService
     *          The chat service.
     */
    constructor(
        public dialogRef: MatDialogRef<NewChatDialogComponent>,
        private userService: UserService,
        private chatService: ChatService,
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

    /**
     * Listener called when the user clicks in one of his contacts.
     * If the contact was already added to the new chat, the function will
     * delete that contact from the new chat. Otherwise, it will add the contact
     * as a participant of the new chat.
     *
     * @param contact
     *          The contact clicked by the user.
     */
    onContactClick(contact: User) {
        console.log('You clicked on ' + contact.nickname);

        // If he's in, delete him
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i] == contact) {
                this.users.splice(i, 1);
                return;
            }
        }
        // Otherwise, add
        this.users.push(contact);
    }

    /**
     * Checks wether the contact is listed as a participant of the new chat
     * or not.
     *
     * @param contact
     *          The specified contact.
     */
    isContactIn(contact: User) {
        return this.users.includes(contact);
    }

    /**
     * Closes the dialog.
     */
    cancel() {
        this.closeDialog();
    }

    /**
     * Creates the new chat.
     */
    async create() {
        if (this.chatName == undefined) {
            return;
        } // TODO warn error

        if (this.users.length == 0) {
            return;
        } // TODO warn error

        console.log('Creating new chat');
        console.log('Chat name: ' + this.chatName);

        var chat = await this.chatService.createGroupChat(this.chatName, this.users);
        this.chatService.allChats.push(chat);
        await this.chatService.openChat(chat);

        this.closeDialog();
    }

    private closeDialog() {
        this.dialogRef.close('Dialog closed!');
    }

}
