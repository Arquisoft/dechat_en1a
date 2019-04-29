import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SolidProfile} from '../models/solid/solid-profile.model';
import {RdfService} from '../services/solid/rdf.service';
import {AuthService} from '../services/solid/solid.auth.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

    /**
     * The SOLID profile.
     * 
     * @type {SolidProfile}
     */
    profile: SolidProfile;

    /**
     * The profile image.
     * 
     * @type {string}
     */
    profileImage: string;

    /**
     * Represents wether the profile is being loaded 
     * or not.
     * 
     * @type {boolean}
     */
    loadingProfile: boolean;

    /**
     * The card form.
     * 
     * @type {NgForm}
     */
    @ViewChild('f') cardForm: NgForm;


    /**
     * Creates a CardComponent.
     */
    constructor(private rdf: RdfService,
                private route: ActivatedRoute, private auth: AuthService) {
    }

    ngOnInit() {
        this.loadingProfile = true;
        this.loadProfile();

        // Clear cached profile data
        // TODO: Remove this code and find a better way to get the old data
        localStorage.removeItem('oldProfileData');
    }

    // Loads the profile from the rdf service and handles the response
    async loadProfile() {
        try {
            this.loadingProfile = true;
            const profile = await this.rdf.getProfile();
            if (profile) {
                this.profile = profile;
                this.auth.saveOldUserData(profile);
            }

            this.loadingProfile = false;
            this.setupProfileData();
        } catch (error) {
            console.log(`Error: ${error}`);
        }

    }

    /**
     * Submits the form, and saves the profile data using the auth/rdf service
     */
    async onSubmit() {
        if (!this.cardForm.invalid) {
            try {
                await this.rdf.updateProfile(this.cardForm);
                localStorage.setItem('oldProfileData', JSON.stringify(this.profile));
            } catch (err) {
                console.log(`Error: ${err}`);
            }
        }
    }


    /**
     * Formats data coming back from server. Its intended purpose is to replace 
     * profile image with default if it's missing and potentially format 
     * the address if we need to reformat it for this UI.
     */
    private setupProfileData() {
        if (this.profile) {
            this.profileImage = this.profile.image ? this.profile.image : '/assets/images/profile.png';
        } else {
            this.profileImage = '/assets/images/profile.png';
        }
    }
    
    /**
     * Example of logout functionality. Normally wouldn't be 
     * triggered by clicking the profile picture.
     */
    logout() {
        this.auth.solidSignOut();
    }
}
