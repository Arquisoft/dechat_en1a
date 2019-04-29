import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/dechat/user.service';

@Component({
    selector: 'app-profile-icon',
    templateUrl: './profile-icon.component.html',
    styleUrls: ['./profile-icon.component.css']
})
export class ProfileIconComponent implements OnInit {

    // Properties

    /**
     * The name of the user.
     * 
     * @type {string}
     */
    userName: string;

    /**
     * The profile image of the user.
     * 
     * @type {string}
     */
    profileImage: string;


    // Constructor

    /**
     * Creates a ProfileIconComponent.
     * 
     * @param user 
     *          The user service.
     */
    constructor(private user: UserService) {
        this.profileImage = '/assets/images/profile.png';
    }

    ngOnInit() {
        this.loadProfile();
    }

    /**
     * Loads the profile of the current user.
     */
    async loadProfile() {
        this.userName = await this.user.getUserName();
        this.profileImage = await this.user.getProfileImage();
    }

}
