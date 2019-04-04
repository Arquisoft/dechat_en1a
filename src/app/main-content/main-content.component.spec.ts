import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentComponent } from './main-content.component';
import { ChatListComponent } from '../sidebarComponents/chat-list/chat-list.component';
import { ChatroomComponent } from '../chatComponents/chatroom/chatroom.component';
import { ChatItemComponent } from '../sidebarComponents/chat-item/chat-item.component';
import { FeedComponent } from '../chatComponents/feed/feed.component';
import { MessageComponent } from '../chatComponents/message/message.component';
import { ChatFormComponent } from '../chatComponents/chat-form/chat-form.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../services/dechat/chat.service';
import { MessageService } from '../services/dechat/message.service';
import { UserService } from '../services/dechat/user.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainContentComponent', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot(),
        RouterTestingModule
      ],
      declarations: [ 
        MainContentComponent,
        ChatListComponent,
        ChatroomComponent
      ]
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
