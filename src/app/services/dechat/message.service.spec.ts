import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';

describe('MessageService', () => {
  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule, ToastrModule.forRoot() ],
    providers: [ MessageService ]
  }));

  it('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });
});
