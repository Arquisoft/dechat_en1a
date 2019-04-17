import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisplaySlotComponent } from './user-display-slot.component';
import { ToastrModule } from 'ngx-toastr';

describe('UserDisplaySlotComponent', () => {
  let component: UserDisplaySlotComponent;
  let fixture: ComponentFixture<UserDisplaySlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDisplaySlotComponent ],
      imports: [ ToastrModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDisplaySlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
