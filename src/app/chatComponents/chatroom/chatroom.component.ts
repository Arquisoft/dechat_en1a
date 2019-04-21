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

    // Properties

    /**
     * Reference to the #scroller element in the DOM
     * 
     * @type {ElementRef}
     */ 
    @ViewChild('scroller') feedContainer: ElementRef;


    // Constructor

    /**
     * Creates a ChatRoomComponent.
     * 
     * @param chatService 
     *          The chat service.
     */
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
