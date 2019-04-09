import {Component, Input, OnInit} from '@angular/core';
import {ChatInfo} from 'src/app/models/dechat/chat-info.model';
import {ChatService} from 'src/app/services/dechat/chat.service';

@Component({
    selector: 'app-chat-item',
    templateUrl: './chat-item.component.html',
    styleUrls: ['./chat-item.component.css'],
})

export class ChatItemComponent implements OnInit {

    @Input() chatInfo: ChatInfo;

    constructor(private chatService: ChatService) {

    }

    ngOnInit() {

    }

    openChat() {
        this.toggleChatNav();
        console.log('Oppening chat with ' + this.chatInfo.chatName);
        this.chatService.openChat(this.chatInfo);
    }

    toggleChatNav() {
        document.getElementById('userListWrapper').style.width = '0';
        document.getElementById('chatroomWrapper').style.marginLeft = '0';
    }

}
