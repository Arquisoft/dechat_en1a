import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from 'src/app/services/dechat/user.service';
import { MockUserService } from 'src/app/services/mock/mock-user.service';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ToastrModule.forRoot() ],
      declarations: [ MessageComponent ],
      providers: [ {provide: UserService, useClass: MockUserService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
