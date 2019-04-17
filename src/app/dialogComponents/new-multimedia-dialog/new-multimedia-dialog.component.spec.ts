import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMultimediaDialogComponent } from './new-multimedia-dialog.component';

describe('NewMultimediaDialogComponent', () => {
  let component: NewMultimediaDialogComponent;
  let fixture: ComponentFixture<NewMultimediaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMultimediaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMultimediaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
