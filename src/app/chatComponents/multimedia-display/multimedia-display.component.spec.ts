import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaDisplayComponent } from './multimedia-display.component';

describe('MultimediaDisplayComponent', () => {
  let component: MultimediaDisplayComponent;
  let fixture: ComponentFixture<MultimediaDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
