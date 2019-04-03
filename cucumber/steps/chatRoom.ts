import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Given, Then, When} from 'cucumber';
import {BehaviorSubject} from 'rxjs';
import {ChatRoomComponent} from '../../src/app/chatComponents/chat-form/chatroom.component';
import {FeedComponent} from '../../src/app/chatComponents/feed/feed.component';

let feedComponent: FeedComponent;
let feedFixture: ComponentFixture<FeedComponent>;

let chatRoom: ChatRoomComponent;
let chatRoomFixture: ComponentFixture<ChatRoomComponent>;

feedFixture = TestBed.createComponent(FeedComponent);
feedComponent = feedFixture.componentInstance;

chatRoomFixture = TestBed.createComponent(ChatRoomComponent);
chatRoomComponent = chatRoomFixture.componentInstance;

Given('I logged in', function() {
    chatRoomComponent.ngOnInit();
});

When('I click on a chat', function() {
    chatRoomComponent.ngAfterViewChecked();
});

Then('I should be able to see my chat', function() {
    const subject = new BehaviorSubject(null);

    feedComponent.feed.subscribe(ngOnChanges(null));
    expect(subject.getValue).toEqual(true);
});
