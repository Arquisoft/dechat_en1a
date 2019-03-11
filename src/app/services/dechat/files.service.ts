import { Injectable } from '@angular/core';
import * as solidFiles from 'solid-file-client';
import { User } from 'src/app/models/dechat/user.model';
import { ChatInfo } from 'src/app/models/dechat/chat-info.model';
import { RdfService } from '../solid/rdf.service';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private rdf: RdfService) { }




  async checkUserFiles(user: User) {
    await this.rdf.getSession();
    var userFolder = user.url.replace("/profile/card#me", "/private/dechat/");
      this.checkFolderExistence(userFolder).then(
        result => {this.checkFolderExistence(userFolder + "/chats/");
      });
  }


  async checkFolderExistence(url : string) {
    await this.rdf.getSession();
    try {
      solidFiles.readFolder(url).then(
        (success: any) => { console.log('Existent folder!'); }, 
        (error: any) => {
            console.log('Non existent folder...');
            this.createFolder(url);
        });
    } catch (error) {
      console.log(`Error creating folder: ${error}`);
    }
  }



  async checkChatFolder(user: User, chat : ChatInfo) {
    await this.rdf.getSession();
    this.getChatUrl(user, chat).then(
      url => {this.checkFolderExistence(url);}
    );
  }


  async getChatUrl(user: User, chat : ChatInfo): Promise<string> {
    var userFolder = user.url.replace("/profile/card#me", "/private/dechat/chats/");
    var url = userFolder + chat.chatId + "/";
    console.log("Chat url = " + url);
    return url;
  }


  async createFolder(path: String) {
    await solidFiles.createFolder(path).then(
      (success: any) => { console.log(`Created folder ${path}.`); },
      (error: any) => { console.log('Could not create folder: ' + error) }
    );
  }

  async createFile(path: String, str: String = null) {
    await solidFiles.createFile(path).then(
      (success: any) => { 
        console.log(`Created file ${path}.`);
        if (str != null)
          this.updateFile(path, str);
      },
      (error: any) => { console.log('Could not create file: ' + error) }
    );
  }

  async updateFile(path: String, str: String) {
    await solidFiles.updateFile(path, str).then(
      (success: any) => { console.log("File edited!"); },
      (error: any) => { console.log("Could not edit file: " + error) }
    );
  }


  // Shout out to our mates in group en1B
  async givePermissions(path: string, user: User) {
    const webId = user.url.replace('#me', '#');
    const acl =
   `@prefix : <#>.
    @prefix n0: <http://www.w3.org/ns/auth/acl#>.
    @prefix ch: <./>.
    @prefix c: </profile/card#>.
    @prefix c0: <${webId}>.

    :ControlReadWrite
        a n0:Authorization;
        n0:accessTo ch:;
        n0:agent c:me;
        n0:defaultForNew ch:;
        n0:mode n0:Control, n0:Read, n0:Write.
    :Read
        a n0:Authorization;
        n0:accessTo ch:;
        n0:agent c0:me;
        n0:defaultForNew ch:;
        n0:mode n0:Read.`;
    path += '.acl';
    solidFiles.updateFile(path, acl).then((success: any) => {
      console.log('Folder permisions added');
    }, (err: string) => console.log('Could not set folder permisions' + err));
  }

}
