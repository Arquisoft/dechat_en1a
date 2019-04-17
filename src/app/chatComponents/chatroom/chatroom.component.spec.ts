import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomComponent } from './chatroom.component';
import { FeedComponent } from '../feed/feed.component';
import { ChatFormComponent } from '../chat-form/chat-form.component';
import { ChatMessage } from 'src/app/models/dechat/chat-message.model';
import { ToastrModule } from 'ngx-toastr';
import { ChatService } from 'src/app/services/dechat/chat.service';
import { MessageComponent } from '../message/message.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ChatroomComponent', () => {
  let component: ChatroomComponent;
  let fixture: ComponentFixture<ChatroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ToastrModule.forRoot() ],
      declarations: [ 
        ChatroomComponent,
        FeedComponent,
        ChatFormComponent,
        MessageComponent
      ],
      providers: [ ChatService ]
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
