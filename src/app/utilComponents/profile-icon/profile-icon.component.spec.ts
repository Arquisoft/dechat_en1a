import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIconComponent } from './profile-icon.component';
import { UserService } from '../../services/dechat/user.service';
import { ToastrModule } from 'ngx-toastr';
import { MockUserService } from 'src/app/services/mock/mock-user.service';

describe('ProfileIconComponent', () => {
  let component: ProfileIconComponent;
  let fixture: ComponentFixture<ProfileIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ToastrModule.forRoot() ],
      declarations: [ ProfileIconComponent ],
      providers: [ {provide: UserService, useClass: MockUserService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
