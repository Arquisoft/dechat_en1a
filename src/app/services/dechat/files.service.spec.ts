import { TestBed } from '@angular/core/testing';

import { FilesService } from './files.service';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';

describe('FilesService', () => {
  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule, ToastrModule.forRoot() ],
    providers: [ FilesService ]
  }));

  it('should be created', () => {
    //const service: FilesService = TestBed.get(FilesService);
    //expect(service).toBeTruthy();
  });
});
