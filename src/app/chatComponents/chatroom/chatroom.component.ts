import {AfterViewChecked, Component, ElementRef, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {MessageBundle} from 'src/app/models/dechat/message-bundle.model';
import {ChatService} from '../../services/dechat/chat.service';

@Component({
    selector: 'app-chatroom',
    templateUrl: './chatroom.component.html',
    styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit, AfterViewChecked {

    // Reference to the #scroller element in the DOM
    @ViewChild('scroller') private feedContainer: ElementRef;

    ready: Observable<boolean[]>;

    chatNav: boolean;

    constructor(private chatService: ChatService) {
        this.chatNav = false;
    }

    ngOnInit() {
        this.ready = this.chatService.isReady();
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.ready = this.chatService.isReady();
    }

    scrollToBottom(): void {
        this.feedContainer.nativeElement.scrollTop =
            this.feedContainer.nativeElement.scrollHeight;
    }

    toggleChatNav() {
        if (this.chatNav === false) {
            document.getElementById('userListWrapper').style.width = '200px';
            this.chatNav = true;
        } else {
            document.getElementById('userListWrapper').style.width = '0';
            document.getElementById('chatroomWrapper').style.marginLeft = '0';
            this.chatNav = false;
        }
    }

}
