import { Injectable } from '@angular/core';
import { RdfService } from '../solid/rdf.service';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/dechat/user.model';
import { SolidProfile } from 'src/app/models/solid/solid-profile.model';
import { AuthService } from '../solid/solid.auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  profile: SolidProfile;
  loadingProfile : boolean;

  //userName: string;
  contacts : User[];

  constructor(
    private rdf : RdfService,
    private auth: AuthService
  ) {
/*
    this.loadingProfile = true;
    this.rdf.getSession();
    this.loadProfile();

    // Clear cached profile data
    // TODO: Remove this code and find a better way to get the old data
    localStorage.removeItem('oldProfileData');
*/
    //this.rdf.getProfile().then(response => this.userName = response.fn);
    //this.loadContacts();
  }


  // Loads the profile from the rdf service and handles the response
  private async loadProfile() {

    await this.rdf.getSession();
    console.log("Loading user profile...");
    try {
      this.loadingProfile = true;
      const profile = await this.rdf.getProfile();
      if (profile) {
        this.profile = profile;
        this.auth.saveOldUserData(profile);
        this.loadContacts();
        console.log("USER SERVICE READY!");
        console.log(this.profile.fn);
      }

      this.loadingProfile = false;
      this.setupProfileData();
      
    } catch (error) {
      console.log(`Error loading profile: ${error}`);
    }

  }


  private setupProfileData() {
    if (this.profile) {
      //this.profileImage = this.profile.image ? this.profile.image : '/assets/images/profile.png';
    } else {
      //this.profileImage = '/assets/images/profile.png';
    }
  }

  getUserName() : string {
    if (this.profile) {
      return this.profile.fn;
    } else {
      return "";
    }
  }


  getContacts() : Observable<User[]> {
    return of(this.contacts);
  }

  private async loadContacts() {
    await this.rdf.getSession();
    var contacts = await this.rdf.getContacts();
    
    contacts.forEach(async element => {
      await this.rdf.fetcher.load(element.value);
      var contact = new User(this.rdf.getValueFromVcard('fn', element.value));
      this.contacts.push(contact);
    });
  }


}
