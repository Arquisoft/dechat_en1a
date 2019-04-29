import { TestBed } from '@angular/core/testing';

import { ChatService } from './chat.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('ChatService', () => {
  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ 
      ToastrModule.forRoot(),
      RouterTestingModule,
      BrowserAnimationsModule
    ],
    providers: [ ChatService ]
  }));

  it('should be created', () => {
    const service: ChatService = TestBed.get(ChatService);
    expect(service).toBeTruthy();
  });
});
