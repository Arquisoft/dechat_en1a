import { Component, OnInit } from '@angular/core';
import { RdfService } from '../services/solid/rdf.service';
import { AuthService } from '../services/solid/solid.auth.service';
import { SolidProfile } from '../models/solid/solid-profile.model';

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.css']
})
export class ProfileIconComponent implements OnInit {

  profile: SolidProfile;

  userName : string;
  profileImage : string;

  loadingProfile: boolean;

  constructor(private rdf: RdfService, private auth: AuthService) { }

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
  }

  private setupDefault() {
    this.userName = "Unknown";
    this.profileImage = '/assets/images/profile.png';
  }




}
