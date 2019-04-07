import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/dechat/user.service';

@Component({
    selector: 'app-profile-icon',
    templateUrl: './profile-icon.component.html',
    styleUrls: ['./profile-icon.component.css']
})
export class ProfileIconComponent implements OnInit {

    userName: string;
    profileImage: string;

    constructor(private user: UserService) {
        this.profileImage = '/assets/images/profile.png';
    }

    ngOnInit() {
        this.loadProfile();
    }

    async loadProfile() {
        this.userName = await this.user.getUserName();
        this.profileImage = await this.user.getProfileImage();
    }

}
