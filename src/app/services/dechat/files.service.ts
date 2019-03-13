import { Injectable } from '@angular/core';
import * as solidFiles from 'solid-file-client';
import { User } from 'src/app/models/dechat/user.model';
import { ChatInfo } from 'src/app/models/dechat/chat-info.model';
import { RdfService } from '../solid/rdf.service';

@Injectable({
  providedIn: 'root'
})
export class FilesService {


  //
  //  ALL INFO NEEDED FOR THIS SERVICE:
  //
  //  https://github.com/jeff-zucker/solid-file-client
  //


  constructor(private rdf: RdfService) { }



  getRoot(user: User) {
    return user.url.replace("/profile/card#me", "/private/dechat_en1a/");
  }


  async checkUserFiles(user: User) {
    await this.rdf.getSession();

    var userFolder = user.url.replace("/profile/card#me", "/private/");

    this.checkFolderExistence(userFolder).then(then =>
      this.checkFolderExistence(userFolder + "dechat_en1a/").then( then =>
       this.checkFolderExistence(userFolder + "dechat_en1a/chats/")
      )
    );
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



  async checkChatFolder(chat : ChatInfo) {
    await this.rdf.getSession();

    await chat.users.forEach(async user => {
        var path = this.getChatUrl(user, chat);
        await this.checkFolderExistence(path).then( result => {
          chat.users.forEach(otherUser =>
              this.givePermissions(path, otherUser)
          );
        });

    });    
  }


  getChatUrl(user: User, chat : ChatInfo) : string {
    var userFolder = this.getRoot(user) + "chats/";
    var url = userFolder + chat.chatId + "/";
    console.log("Chat url = " + url);
    return url;
  }


  async createFolder(url: String) {
    await solidFiles.createFolder(url).then(
      (success: any) => { console.log(`Created folder ${url}.`); },
      (error: any) => { console.log('Could not create folder: ' + error) }
    );
  }

  async createFile(url: string, str: string = null) {
    await solidFiles.createFile(url).then(
      (success: any) => { 
        console.log(`Created file ${url}.`);
        if (str != null)
          this.updateFile(url, str);
      },
      (error: any) => { console.log('Could not create file: ' + error) }
    );
  }

  async updateFile(url: string, str: string) {
    await solidFiles.updateFile(url, str).then(
      (success: any) => { console.log("File edited!"); },
      (error: any) => { console.log("Could not edit file: " + error) }
    );
  }



  async readFile(url: string) : Promise<string> {
    var result = "";
    await solidFiles.readFile(url).then(  body => {
      console.log(`File content is : ${body}.`);
      result = body;
    }, err => console.log(err) );
    return result;
  }


  async readFolder(url: string) : Promise<string[]> {
    var result = [];
    await solidFiles.readFolder(url).then(folder => {
      console.log(`Read ${folder.name}, it has ${folder.files.length} files.`);
      result = folder.files.map(f => f.url);
    }, err => console.log(err) );

    result.forEach(f => console.log("FILE: " + f));

    return result;
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
