import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFormComponent } from './chat-form.component';
import { MessageService } from 'src/app/services/dechat/message.service';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

describe('ChatFormComponent', () => {
  let component: ChatFormComponent;
  let fixture: ComponentFixture<ChatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ToastrModule.forRoot()
      ],
      declarations: [ ChatFormComponent ],
      providers: [ MessageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
