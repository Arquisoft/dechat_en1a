import { Injectable } from '@angular/core';
import { RdfService } from '../solid/rdf.service';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/dechat/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userName: string;
  contacts : User[];

  constructor(
    private rdf : RdfService
    // TODO inject auth stuff maybe
  ) {
    this.rdf.getProfile().then(response => this.userName = response.fn);
    this.loadContacts();
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
