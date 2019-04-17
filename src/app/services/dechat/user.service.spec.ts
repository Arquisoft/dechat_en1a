import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserService', () => {
  

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule, ToastrModule.forRoot() ],
    providers: [ UserService ]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
