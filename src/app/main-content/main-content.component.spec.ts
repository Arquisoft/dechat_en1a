import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';

import {ChatFormComponent} from '../chatComponents/chat-form/chat-form.component';
import {ChatroomComponent} from '../chatComponents/chatroom/chatroom.component';
import {FeedComponent} from '../chatComponents/feed/feed.component';
import {MessageComponent} from '../chatComponents/message/message.component';
import {MultimediaDisplayComponent} from '../chatComponents/multimedia-display/multimedia-display.component';
import {ChatItemComponent} from '../sidebarComponents/chat-item/chat-item.component';
import {ChatListComponent} from '../sidebarComponents/chat-list/chat-list.component';
import {MainContentComponent} from './main-content.component';

import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

import {ChatService} from '../services/dechat/chat.service';
import {MessageService} from '../services/dechat/message.service';
import {UserService} from '../services/dechat/user.service';

describe('MainContentComponent', () => {
    let component: MainContentComponent;
    let fixture: ComponentFixture<MainContentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ToastrModule.forRoot(),
                RouterTestingModule,
                FormsModule,
                MatDialogModule,
            ],
            declarations: [
                MainContentComponent,
                ChatListComponent,
                ChatroomComponent,
                ChatItemComponent,
                FeedComponent,
                ChatFormComponent,
                MessageComponent,
                MultimediaDisplayComponent,
            ],
            providers: [
                {provide: MatDialogRef, useValue: {}},
                {provide: MAT_DIALOG_DATA, useValue: {}},
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
