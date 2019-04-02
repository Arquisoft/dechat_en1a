import {Component, OnInit} from '@angular/core';

import {MessageService} from 'src/app/services/dechat/message.service';

@Component({
    selector: 'app-chat-form',
    templateUrl: './chat-form.component.html',
    styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

    // Attributes //
    message: string; // Corresponds to the ng bingding in the html <input/>

    // Constructor //
    constructor(private messageService: MessageService) {
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
        this.message = '';
    }

    // Called every time a key is pressed (keydown event)
    handleSubmit(event) {

        // Dear future me: === means same value and type.
        if (event.keyCode === 13) {
            this.send();
        }
    }

}
