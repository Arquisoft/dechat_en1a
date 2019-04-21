import {Component, Input, OnInit} from '@angular/core';
import {ChatMessage} from '../../models/dechat/chat-message.model';
import {MultimediaDisplayComponent} from '../multimedia-display/multimedia-display.component';
import { UserService } from 'src/app/services/dechat/user.service';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

    // Properties

    /**
     * Model of a chat message.
     */
    @Input() chatMessage: ChatMessage;

    /**
     * Represents the multimedia contained by a chat message.
     */
    @Input() multimedia: MultimediaDisplayComponent;

    /**
     * The email of the user.
     */
    userEmail: string;

    /**
     * The name of the user.
     */
    userName: string;

    /**
     * The message text.
     */
    messageContent: string;

    /**
     * The time at which the message was sent.
     */
    timeSent: string;

    /**
     * If the message corresponds to the current 
     * user of the application.
     */
    isOwnMessage: boolean;
    ready: boolean;


    // Constructor

    /**
     * Creates a MessageComponent.
     * Sets the isOwnMessage property to false.
     * 
     * @param users 
     *          The user service.
     */
    constructor(private users : UserService) {
        this.ready = true;
        this.isOwnMessage = false;
    }

    /**
     * @param chatMessage
     *          The chat message model.
     * @param multim
     *          The multimedia display component.
     */
    async ngOnInit(chatMessage = this.chatMessage, multim = this.multimedia) {
        if (chatMessage == undefined) {
            chatMessage = new ChatMessage("");
            chatMessage.userName = "dummy";
        }

        this.messageContent = chatMessage.message;
        this.userName = chatMessage.userName;
        this.timeSent = this.getTimeStamp(chatMessage.date);
        this.isOwnMessage = chatMessage.isMessageFrom(await this.users.getUser())
    }

    /**
     * Returns a time stamp with the specified date.
     * 
     * @param date 
     *          The specified date.
     */
    getTimeStamp(date: Date) {
        const day = date.getUTCFullYear() + '/' +
            (date.getUTCMonth() + 1) + '/' +
            date.getUTCDate();

        const time = date.getUTCHours() + ':' +
            date.getUTCMinutes();

        return day + ' ' + time;
    }

}
