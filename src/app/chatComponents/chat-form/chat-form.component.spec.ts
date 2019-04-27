import {OverlayModule} from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { MessageService } from 'src/app/services/dechat/message.service';
import { MockMessageService } from 'src/app/services/mock/mock-message.service';
import { ChatFormComponent } from './chat-form.component';

describe('ChatFormComponent', () => {
    let component: ChatFormComponent;
    let fixture: ComponentFixture<ChatFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ToastrModule.forRoot(),
                ReactiveFormsModule,
                OverlayModule,
                MatDialogModule,
            ],
            declarations: [ ChatFormComponent ],
            providers: [
                {provide: MessageService, useClass: MockMessageService},
                MatDialog,
                MatDialogConfig,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
