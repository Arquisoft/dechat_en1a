import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from 'src/app/models/dechat/user.model';
import {SolidProfile} from 'src/app/models/solid/solid-profile.model';
import {RdfService} from '../solid/rdf.service';
import {AuthService} from '../solid/solid.auth.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    private profile: SolidProfile;
    private loadingProfile: boolean;
    private profileLoaded: boolean;

    private user: User;
    private contacts: User[];

    constructor(private rdf: RdfService, private auth: AuthService) {

        console.log('User service constructor');
        this.user = null;
        this.loadingProfile = true;
        this.profileLoaded = false;
        this.contacts = [];
        this.loadProfile();

        // Clear cached profile data
        // TODO: Remove this code and find a better way to get the old data
        localStorage.removeItem('oldProfileData');
    }

    // Loads the profile from the rdf service and handles the response
    async loadProfile() {

        if (this.profileLoaded) {
            return;
        }

        if (!this.loadingProfile) {
            return;
        }

        try {
            this.loadingProfile = true;
            const profile = await this.rdf.getProfile();
            if (profile) {
                this.profile = profile;
                this.auth.saveOldUserData(profile);
            }

            this.loadingProfile = false;
            this.profileLoaded = true;
            if (this.profile) {
                this.setupFromProfile();
            } else {
                this.setupDefault();
            }

        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    private setupFromProfile() {

        this.user = new User(this.rdf.getWebID());
        this.user.url = this.rdf.getWebID();
        this.user.userName = this.profile.fn;
        this.user.status = 'online';
        this.user.profileImage = this.profile.image ? this.profile.image : '/assets/images/profile.png';
        this.loadContacts();
    }

    private setupDefault() {
        console.log('UserService failed fetching user data. Loading default user.');
        this.user = new User('');
    }

    private async loadContacts() {
        console.log('Fetching contacts...');

        const contacts = await this.rdf.getContacts();
        console.log('Contact count = ' + contacts.length);

        while (this.contacts.length > 0) {
            this.contacts.pop();
        }

        contacts.forEach(async (element) => {
            const c = new User(element.value);
            const friendInfo = await this.rdf.getFriendData(element.value);
            if (friendInfo) {
                c.userName = friendInfo.fn;
                c.userName = friendInfo.fn;
                c.profileImage = friendInfo.image ? friendInfo.image : '/assets/images/profile.png';
            }
            this.contacts.push(c);
        });
    }

    async getUser(): Promise<User> {
        await this.loadProfile();
        return this.user;
    }

    async getUserName(): Promise<string> {
        await this.loadProfile();
        return this.user.userName;
    }

    async getProfileImage(): Promise<string> {
        await this.loadProfile();
        return this.user.profileImage;
    }

    async getContacts(): Promise<User[]> {
        await this.loadProfile();
        return this.contacts;
    }

}
