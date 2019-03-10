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

  contacts : User[];
  userName : string;
  profileImage : string;


  constructor(private rdf: RdfService, private auth: AuthService) {

    this.loadingProfile = true;
    this.loadProfile();

    // Clear cached profile data
    // TODO: Remove this code and find a better way to get the old data
    localStorage.removeItem('oldProfileData');
  }

  // Loads the profile from the rdf service and handles the response
  async loadProfile() {
    if (!this.loadingProfile)
      return;

    try {
      this.loadingProfile = true;
      const profile = await this.rdf.getProfile();
      if (profile) {
        this.profile = profile;
        this.auth.saveOldUserData(profile);
      }

      this.loadingProfile = false;
      if (this.profile) {
        this.setupFromProfile();
      } else {
        this.setupDefault()
      }

    } catch (error) {
      console.log(`Error: ${error}`);
    }

  }

  private setupFromProfile() {
    this.userName = this.profile.fn;
    this.profileImage = this.profile.image ? this.profile.image : '/assets/images/profile.png';
    this.loadContacts();
  }

  private setupDefault() {
    this.userName = "Unknown";
    this.profileImage = '/assets/images/profile.png';
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







  async getUserName() : Promise<string> {
    await this.loadProfile();
    return this.userName;
  }

  async getProfileImage() : Promise<string> {
    await this.loadProfile();
    return this.profileImage;
  }


  getContacts() : Observable<User[]> {
    return of(this.contacts);
  }

  


}
