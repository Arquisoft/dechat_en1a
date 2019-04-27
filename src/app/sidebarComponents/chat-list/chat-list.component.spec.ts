import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {ChatService} from 'src/app/services/dechat/chat.service';
import {UserService} from 'src/app/services/dechat/user.service';
import {MockChatService} from 'src/app/services/mock/mock-chat.service';
import {ChatItemComponent} from '../chat-item/chat-item.component';
import {ChatListComponent} from './chat-list.component';

describe('ChatListComponent', () => {
    let component: ChatListComponent;
    let fixture: ComponentFixture<ChatListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ToastrModule.forRoot(),
                RouterTestingModule,
            ],
            declarations: [
                ChatListComponent,
                ChatItemComponent,
            ],
            providers: [
                {provide: ChatService, useClass: MockChatService},
                {provide: MAT_DIALOG_DATA, useValue: {}},
                {provide: MatDialogRef, useValue: {}},
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
