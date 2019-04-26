import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/solid/solid.auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    // Properties

    /**
     * Represents the available POD providers.
     * 
     * @type {any[]}
     */
    availableProviders: any[];


    // Constructor
    
    /**
     * Creates a RegisterComponent.
     * 
     * @param auth 
     *          The authentication service.
     */
    constructor(private auth: AuthService) {
    }

    ngOnInit() {
        this.availableProviders = this.auth.getIdentityProviders();
        this.availableProviders = this.availableProviders.filter((idp) => idp.providerLoginUrl !== null);
    }

}
