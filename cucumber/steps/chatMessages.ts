import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Given, Then, When} from 'cucumber';
import {BehaviorSubject} from 'rxjs';
import {ChatFormComponent} from '../../src/app/chatComponents/chat-form/chat-form.component';
import {FeedComponent} from '../../src/app/chatComponents/feed/feed.component';
import {ChatMessage} from '../../src/app/models/dechat/chat-message.model';

let feedComponent: FeedComponent;
let feedFixture: ComponentFixture<FeedComponent>;

let chatFormComponent: ChatFormComponent;
let chatFormFixture: ComponentFixture<ChatFormComponent>;

feedFixture = TestBed.createComponent(FeedComponent);
feedComponent = feedFixture.componentInstance;

chatFormFixture = TestBed.createComponent(ChatFormComponent);
chatFormComponent = chatFormFixture.componentInstance;

Given('message text is {string}', function(text: string) {
    chatFormComponent.message = text;
});

When('send button is pressed', function() {
    chatFormComponent.send();
});

Then('message should appear on the feed containing the text {string}', function(expectedText: string) {
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
    expect(subject.getValue).toEqual(expectedText);
});
