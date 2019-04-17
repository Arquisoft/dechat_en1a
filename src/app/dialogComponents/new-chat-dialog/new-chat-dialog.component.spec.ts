import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChatDialogComponent } from './new-chat-dialog.component';
import { ToastrModule } from 'ngx-toastr';

describe('NewChatDialogComponent', () => {
  let component: NewChatDialogComponent;
  let fixture: ComponentFixture<NewChatDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ToastrModule.forRoot() ],
      declarations: [ NewChatDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
