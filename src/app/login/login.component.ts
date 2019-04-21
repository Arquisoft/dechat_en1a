import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SolidProvider} from '../models/solid/solid-provider.model';
// Auth Service
import {AuthService} from '../services/solid/solid.auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

    // Properties

    /**
     * A list of Solid Identity Providers.
     * 
     * @type {SolidProvider[]}
     */
    identityProviders: SolidProvider[];

    /**
     * A string representing the selected provider URL.
     * 
     * @type string
     */
    selectedProviderUrl: string;

    /**
     * A string representing the custom provider URL.
     * 
     * @type string
     */
    customProviderUrl: string;


    // Constructor

    /**
     * Creates a LoginComponent.
     */
    constructor(private auth: AuthService, private router: Router) {
    }

    ngOnInit() {
        // If we're authenticated, go to profile
        if (localStorage.getItem('solid-auth-client')) {
            this.router.navigateByUrl('/chat');
        }

        this.identityProviders = this.auth.getIdentityProviders();
    }

    /**
     * Alternate login-popup function for Solid. See service for more details.
     */
    onLoginPopup = async () => {
        this.auth.solidLoginPopup();
    }

    onLogin = async () => {
        const idp: string = this.selectedProviderUrl ? this.selectedProviderUrl : this.customProviderUrl;

        if (idp) {
            try {
                this.auth.solidLogin(idp);
            } catch (err) {
                console.log('An error has occurred logging in: ' + err);
            }
        }
    }

    /**
     * Goes to the registration page for solid community PODs.
     */
    goToRegistration() {
        window.location.href = 'https://solid.community/register';
    }
}
