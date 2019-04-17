import { TestBed } from '@angular/core/testing';

import { InboxService } from './inbox.service';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';

describe('InboxService', () => {
  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule, ToastrModule.forRoot() ],
    providers: [ InboxService ]
  }));

  it('should be created', () => {
    const service: InboxService = TestBed.get(InboxService);
    expect(service).toBeTruthy();
  });
});
