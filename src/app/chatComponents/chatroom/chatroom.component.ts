import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, SimpleChanges } from '@angular/core';
import { Chat } from 'src/app/models/dechat/chat.model';
import { ChatService } from '../../services/dechat/chat.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit, AfterViewChecked {

  // Reference to the #scroller element in the DOM
  @ViewChild('scroller') private feedContainer: ElementRef;

  ready : Observable<boolean[]>;


  constructor(private chatService: ChatService) {

    
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


  scrollToBottom() : void {
    this.feedContainer.nativeElement.scrollTop = 
            this.feedContainer.nativeElement.scrollHeight;
  }

}
