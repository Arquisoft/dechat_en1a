import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './chat-list.component';
import { ChatItemComponent } from '../chat-item/chat-item.component';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from 'src/app/services/dechat/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ChatService } from 'src/app/services/dechat/chat.service';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot(),
        RouterTestingModule
      ],
      declarations: [
        UserListComponent,
        ChatItemComponent
      ],
      providers: [ ChatService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
