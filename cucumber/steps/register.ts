import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Given, Then, When} from 'cucumber';
import {BehaviorSubject} from 'rxjs';
import {loginComponent} from '../../src/app/login/login.component';
import {FeedComponent} from '../../src/app/chatComponents/feed/feed.component';

let feedComponent: FeedComponent;
let feedFixture: ComponentFixture<FeedComponent>;

let register: RegisterComponent;
let registerFixture: ComponentFixture<RegisterComponent>;

feedFixture = TestBed.createComponent(FeedComponent);
feedComponent = feedFixture.componentInstance;

registerFixture = TestBed.createComponent(LoginComponent);
registerComponent = registerFixture.componentInstance;

Given('I am on the webpage', function() {
    registerComponent.ngOnInit();
});

When('I click on register button', function() {
    registerComponent.goToRegistration();
});

Then('I should be able to register myself', function() {
    const subject = new BehaviorSubject(null);

    feedComponent.feed.subscribe();
    expect(subject.getValue).toEqual(true);
});
