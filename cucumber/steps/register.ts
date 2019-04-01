import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Given, Then, When} from 'cucumber';
import {BehaviorSubject} from 'rxjs';
import {ChatFormComponent} from '../../src/app/register/register.component';
import {FeedComponent} from '../../src/app/chatComponents/feed/feed.component';
import {Register} from '../../src/app/models/dechat/chat-message.model';

let feedComponent: FeedComponent;
let feedFixture: ComponentFixture<FeedComponent>;

let register: RegisterComponent;
let registerFixture: ComponentFixture<RegisterComponent>;

feedFixture = TestBed.createComponent(FeedComponent);
feedComponent = feedFixture.componentInstance;

registerFixture = TestBed.createComponent(RegisterComponent);
registerComponent = cregisterFixture.componentInstance;

Given('I am on the webpage', function() {
    registerComponent.ngOnInit();
});

When('I click on register button', function() {
    registerComponent.ngAfterViewChecked();
});

Then('I should be able to register myself', function() {
    const subject = new BehaviorSubject(null);

    feedComponent.feed.subscribe(
        (x: ChatMessage[]) => {
            subject.next(x);
        },
        (err: any) => {
            subject.error(err);
        },
        () => {
            subject.complete();
        },
    );
    expect(subject.getValue).toEqual(true);
});
