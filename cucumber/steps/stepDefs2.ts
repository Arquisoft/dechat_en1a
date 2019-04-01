import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Given, Then, When} from 'cucumber';
import {BehaviorSubject} from 'rxjs';
import {LoginComponent} from '../../src/app/login/login.component';

let loginComponent: LoginComponent;
let loginFixture: ComponentFixture<LoginComponent>;

Given('The user is in the login page', function() {
    loginFixture = TestBed.createComponent(LoginComponent);
	loginComponent = loginFixture.componentInstance;
});

When('the user selects the Solid community option and clicks the Go button', function() {
    loginComponent.loginUrl = "Solid community";
    loginComponent.onLogin();
});

Then('a solid Login page will appear', function() {  
    expect(window.location.host).toEqual('solid.community');
});
