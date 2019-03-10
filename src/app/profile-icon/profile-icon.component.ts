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
      this.setupProfileData();
    } catch (error) {
      console.log(`Error: ${error}`);
    }

  }


  // Format data coming back from server. Intended purpose is to replace profile image with default if it's missing
  // and potentially format the address if we need to reformat it for this UI
  private setupProfileData() {
    if (this.profile) {
      this.userName = this.profile.fn;
    } else {
      this.userName = "Unknown";
    }
  }

}
