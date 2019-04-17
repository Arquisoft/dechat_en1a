import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from 'src/app/models/dechat/user.model';
import {SolidProfile} from 'src/app/models/solid/solid-profile.model';
import {RdfService} from '../solid/rdf.service';
import {AuthService} from '../solid/solid.auth.service';

@Injectable({
    providedIn: 'root',
})
export class MockUserService {

    private profile: SolidProfile;
    private loadingProfile: boolean;
    private profileLoaded: boolean;

    private user: User;
    private contacts: User[];

    constructor() {
        this.user = new User("dummy");
        this.contacts = [];
    }

    

    

    async getUser(): Promise<User> {
        return this.user;
    }

    async getUserName(): Promise<string> {
        return this.user.userName;
    }

    async getProfileImage(): Promise<string> {
        return this.user.profileImage;
    }

    async getContacts(): Promise<User[]> {
        return this.contacts;
    }

}
