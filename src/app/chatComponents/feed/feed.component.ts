import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {MessageService} from 'src/app/services/dechat/message.service';
import {ChatMessage} from '../../models/dechat/chat-message.model';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {

    // Properties

    /**
     * The feed of the chat, being represented 
     * by an Observable of ChatMessage objects.
     * 
     * @type {Observable<ChatMessage[]>}
     */
    feed: Observable<ChatMessage[]>;
    ready: boolean;


    // Constructor

    /**
     * Creates a FeedComponent.
     * 
     * @param messageService 
     *          The message service, used to retrieve the messages of the chat.
     */
    constructor(private messageService: MessageService) {
        this.ready = true;
    }

    ngOnInit() {
        this.update();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.update();
    }

    update(): void {
        this.feed = this.messageService.getMessages();
    }

}
