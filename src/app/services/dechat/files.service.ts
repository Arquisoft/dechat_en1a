import {Injectable} from '@angular/core';
import * as solidFiles from 'solid-file-client';
import {ChatInfo} from 'src/app/models/dechat/chat-info.model';
import {User} from 'src/app/models/dechat/user.model';
import {RdfService} from '../solid/rdf.service';

@Injectable({
    providedIn: 'root',
})
export class FilesService {

    //
    //  ALL INFO NEEDED FOR THIS SERVICE:
    //
    //  https://github.com/jeff-zucker/solid-file-client
    //

    /**
     * Creates a file service.
     *
     * @param rdf
     *          The rdf service.
     */
    constructor(private rdf: RdfService) {
    }

    /**
     * Gets the private folder of the given user.
     *
     * @param user
     *          The given user.
     */
    getRoot(user: User) {
        return user.url.replace('/profile/card#me', '/private/dechat_en1a/');
    }

    async checkUserFiles(user: User) {
        await this.rdf.getSession();

        const userFolder = user.url.replace('/profile/card#me', '/private/');
        const inboxFolder = user.url.replace('/profile/card#me', '/inbox/');

        //this.readFile(user.url.replace('/profile/card#me', "/.acl"));
        //this.readFile(inboxFolder + ".acl");

        this.checkFolderExistence(inboxFolder);
        this.checkFolderExistence(userFolder).then((then) =>
            this.checkFolderExistence(userFolder + 'dechat_en1a/').then((then) =>
                this.checkFolderExistence(userFolder + 'dechat_en1a/chats/'),
            ),
        );
    }

  // Checks if a folder exists.
  // If not, it will create a folder with the requested url.
  /**
   * Checks if a folder exists. If it does not exist, it will create
   * a folder with the requested URL.
   *
   * @param url
   *          The requested url
   * @param onError
   *          Function to be executed in case an error occurs.
   */
  async checkFolderExistence(url: string, onError = (err) => {}) {
    await this.rdf.getSession();
    try {
      solidFiles.readFolder(url).then(
        (success: any) => { console.log('Existent folder!'); },
        (error: any) => {
            console.log('Non existent folder. Creating new one...');
            this.createFolder(url).then(onError);
        });
    } catch (error) {
      console.log(`Error creating folder: ${error}`);
    }
  }

 /**
  * Checks the existence of the chat folder, and inside that folder,
  * checks whethere the chat data file exists or not.
  */
  async checkChatFolder(user: User, chat: ChatInfo) {
    await this.rdf.getSession();

    const path = this.getChatUrl(user, chat);

    const error = (e) => { // TO be executed if the file doesn't exist yet
      this.checkChatDataFile(path, chat);
      this.givePermissions(path, user);
    };

    await this.checkFolderExistence(path, error);

  }

  private checkChatDataFile(path: string, chat: ChatInfo) {
      const filename = path + 'data.txt';
      const json = JSON.stringify(chat);
      this.updateFile(filename, json);
  }

  /**
   * Gets the chats' root URL for a given user.
   *
   * @param user
   *          The given user.
   */
  getChatsRootUrl(user: User): string {
    return this.getRoot(user) + 'chats/';
  }

  /**
   * Gets the given chat url of the given user.
   *
   * @param user
   *          The given user.
   * @param chat
   *          The given chat.
   */
  getChatUrl(user: User, chat: ChatInfo): string {
    const userFolder = this.getRoot(user) + 'chats/';
    const url = userFolder + chat.chatId + '/';
    console.log('Chat url = ' + url);
    return url;
  }

  /**
   * Gets the Inbox URL of the given user.
   *
   * @param user
   *          The given user.
   */
  getInboxUrl(user: User): string {
    return user.url.replace('/profile/card#me', '/inbox/');
  }

  /**
   * Creates a folder for the given URL.
   *
   * @param url
   *          The URL in which the folder will be created.
   */
  async createFolder(url: String) {
    await solidFiles.createFolder(url).then(
      (success: any) => { console.log(`Created folder ${url}.`); },
      (error: any) => { console.log('Could not create folder: ' + error); },
    );
  }

  /**
   * Creates a file for the given URL and a string.
   *
   * @param url
   *          The URL in which the file will be created.
   * @param str
   *          The given string.
   */
  async createFile(url: string, str: string = null) {
    await solidFiles.createFile(url).then(
      (success: any) => {
        console.log(`Created file ${url}.`);
        if (str != null) {
          this.updateFile(url, str);
        }
      },
      (error: any) => { console.log('Could not create file: ' + error); },
    );
  }

  /**
   * Updates a file given its URL and a string.
   *
   * @param url
   *          The URL of the file.
   * @param str
   *          The string to be updated.
   */
  async updateFile(url: string, str: string) {
    await solidFiles.updateFile(url, str).then(
      (success: any) => { console.log('File edited!'); },
      (error: any) => {
        //console.log("Could not edit file: " + error)
        this.createFile(url, str);
      },
    );
  }

  /**
   * Reads a file given its URL.
   *
   * @param url
   *          The URL of the file.
   */
  async readFile(url: string): Promise<string> {
    let result = '';
    await solidFiles.readFile(url).then(  (body) => {
      console.log(`File content is : ${body}.`);
      result = body;
    }, (err) => console.log(err) );
    return result;
  }

  /**
   * Deletes a file given its URL.
   *
   * @param url
   *          The URL of the file.
   */
  deleteFile(url: string) {
    solidFiles.deleteFile(url).then(
        (success) => { console.log(`Deleted ${url}.`); },
        (err) => console.log(err),
      );
  }

  /**
   * Reads the contents of a folder.
   *
   * @param url
   *          The URL of the folder.
   */
  async readFolder(url: string): Promise<string[]> {

    let result = [];
    await solidFiles.readFolder(url).then(
      (folder) => { result = folder.files.map((f) => f.url); },
      (err) => console.log(err),
    );
    return result;
  }

  /**
   * Deletes a folder.
   *
   * @param url
   *          The URL of the folder.
   */
  deleteFolder(url: string) {
    solidFiles.deleteFolder(url).then(
        (success) => { console.log(`Deleted ${url}.`); },
        (err) => console.log(err),
      );
  }

  /**
   * Reads the subfolders of a folder.
   *
   * @param url
   *          The URL of the folder.
   */
  async readFolderSubfolders(url: string): Promise<string[]> {

    let result = [];
    await solidFiles.readFolder(url).then(
      (folder) => { result = folder.folders.map((f) => f.url); },
      (err) => console.log(err),
    );
    return result;
  }

  /**
   * Gives permissions to the private folder of the owner.
   *
   * @param path
   *          The path to the private folder.
   * @param owner
   *          The owner of the private folder.
   */
  async givePermissions(path: string, owner: User) {
    const webId = owner.url; //.replace('#me', '#');
    const acl =
          `# ACL resource for the profile folder
          @prefix acl: <http://www.w3.org/ns/auth/acl#>.
          @prefix foaf: <http://xmlns.com/foaf/0.1/>.

          # The owner has all permissions
          <#owner>
              a acl:Authorization;
              acl:agent <${webId}>;
              acl:accessTo <./>;
              acl:defaultForNew <./>;
              acl:mode acl:Read, acl:Write, acl:Control.

          # The public has read permissions
          <#public>
              a acl:Authorization;
              acl:agentClass foaf:Agent;
              acl:accessTo <./>;
              acl:defaultForNew <./>;
              acl:mode acl:Read.`;

    path += '.acl';
    this.readFile(path);
    solidFiles.updateFile(path, acl).then(
      (success: any) => {
        console.log('Folder permisions added');
      },
      (err: string) => console.log('Could not set folder permisions' + err),
    );
  }

  // Process the .acl file to give premissions to a new user
  // Work in prograss
  private addUserToAclFile(str: string, newUser: User) {

      const webId = newUser.url;
      const lines: string[] = str.split('\n');

      // First check the @prefixes //
      let lastPrefixLine = 0;
      const prefixes = lines.filter((str, index, array) => {
          if (str.startsWith('@prefix')) {
              lastPrefixLine = index;
              return true;
          }
          return false;
      });

      // Check w3.org auth acl
      let isW3Added = false;
      const w3 = 'http://www.w3.org/ns/auth/acl#';
      for (let i = 0; i < prefixes.length; i++) {
          if (prefixes[i].includes(w3)) {
              isW3Added = true;
              break;
          }
      }
      if (!isW3Added) {
          const prefix = `@prefix n0: <${w3}>.\n`;
          lines.splice(lastPrefixLine, 0 /*no removing!*/, prefix);
          lastPrefixLine++;
      }

      // Check user prefix added
      let isUserAdded = false;
      for (let i = 0; i < prefixes.length; i++) {
          if (prefixes[i].includes(webId)) {
              isUserAdded = true;
              break;
          }
      }
      if (!isUserAdded) {
          const prefix = `@prefix c0: <${webId}>.\n`;
          lines.splice(lastPrefixLine, 0 /*no removing!*/, prefix);
      }

      // Now add the :Read permission //
      let readIndex = lines.findIndex((str, index, array) => str.startsWith(':Read'));
      if (readIndex == -1) {
          readIndex = lines.length;
          lines.push(':Read\n');
          lines.push('a n0:Authorization;\n');
          lines.push('n0:accessTo <./>:;\n');
          lines.push('n0:defaultForNew <./>:;\n');
          lines.push('n0:mode n0:Read.`;\n');

          lines.push('n0:agent c0:me;\n');
      }

  }

}
