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

    feed: Observable<ChatMessage[]>;

    ready: boolean;

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
