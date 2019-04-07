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
    @ViewChild('scroller') feedContainer: ElementRef;


    constructor(public chatService: ChatService) {

    }

    ngOnInit() {
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }


    scrollToBottom(): void {
        this.feedContainer.nativeElement.scrollTop =
            this.feedContainer.nativeElement.scrollHeight;
    }

}
