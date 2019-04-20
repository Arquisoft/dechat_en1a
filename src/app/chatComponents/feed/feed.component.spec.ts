import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedComponent } from './feed.component';
import { MessageComponent } from '../message/message.component';
import { ToastrModule } from 'ngx-toastr';
import { MessageService } from 'src/app/services/dechat/message.service';
import { MockMessageService } from 'src/app/services/mock/mock-message.service';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        ToastrModule.forRoot()
      ],
      declarations: [ 
        FeedComponent,
        MessageComponent
      ],
      providers: [ {provide: MessageService, useClass: MockMessageService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
