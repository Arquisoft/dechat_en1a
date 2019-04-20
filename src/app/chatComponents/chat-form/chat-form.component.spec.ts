import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFormComponent } from './chat-form.component';
import { MessageService } from 'src/app/services/dechat/message.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MockMessageService } from 'src/app/services/mock/mock-message.service';
import { MatDialog, MatDialogConfig } from "@angular/material";

describe('ChatFormComponent', () => {
  let component: ChatFormComponent;
  let fixture: ComponentFixture<ChatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule
      ],
      declarations: [ ChatFormComponent ],
      providers: [ 
        {provide: MessageService, useClass: MockMessageService},
        MatDialog
      ]
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
