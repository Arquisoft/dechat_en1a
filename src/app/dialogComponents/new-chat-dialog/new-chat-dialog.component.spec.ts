import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material';
import {ToastrModule} from 'ngx-toastr';
import {RouterTestingModule} from '@angular/router/testing';

import {UserDisplaySlotComponent} from '../../utilComponents/user-display-slot/user-display-slot.component';
import {NewChatDialogComponent} from './new-chat-dialog.component';

describe('NewChatDialogComponent', () => {
    let component: NewChatDialogComponent;
    let fixture: ComponentFixture<NewChatDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ToastrModule.forRoot(),
                FormsModule,
                MatDialogModule,
                RouterTestingModule,
            ],
            declarations: [
                NewChatDialogComponent,
                UserDisplaySlotComponent,
            ],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useValue: {} },
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewChatDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
