import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewMultimediaDialogComponent} from './new-multimedia-dialog.component';

import {FormsModule} from '@angular/forms';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

describe('NewMultimediaDialogComponent', () => {
    let component: NewMultimediaDialogComponent;
    let fixture: ComponentFixture<NewMultimediaDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
            ],
            declarations: [NewMultimediaDialogComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useValue: {} },
            ],
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
