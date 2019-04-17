import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatItemComponent } from './chat-item.component';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { ChatService } from 'src/app/services/dechat/chat.service';
import { MockChatService } from 'src/app/services/mock/mock-chat.service';

describe('ChatItemComponent', () => {
  let component: ChatItemComponent;
  let fixture: ComponentFixture<ChatItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        ToastrModule.forRoot(),
        RouterTestingModule
      ],
      declarations: [ 
        ChatItemComponent
      ],
      providers: [ {provide: ChatService, useClass: MockChatService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
