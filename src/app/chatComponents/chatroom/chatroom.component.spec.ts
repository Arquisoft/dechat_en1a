import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { ChatMessage } from 'src/app/models/dechat/chat-message.model';
import { ChatService } from 'src/app/services/dechat/chat.service';
import { MockChatService } from 'src/app/services/mock/mock-chat.service';
import { ChatFormComponent } from '../chat-form/chat-form.component';
import { FeedComponent } from '../feed/feed.component';
import { MessageComponent } from '../message/message.component';
import { MultimediaDisplayComponent } from '../multimedia-display/multimedia-display.component';
import { ChatroomComponent } from './chatroom.component';

describe('ChatroomComponent', () => {
    let component: ChatroomComponent;
    let fixture: ComponentFixture<ChatroomComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                ToastrModule.forRoot(),
                FormsModule,
                ReactiveFormsModule,
            ],
            declarations: [
                ChatroomComponent,
                FeedComponent,
                ChatFormComponent,
                MessageComponent,
                MultimediaDisplayComponent,
            ],
            providers: [ {provide: ChatService, useClass: MockChatService} ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatroomComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
