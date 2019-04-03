import {Injectable} from '@angular/core';

import { ChatMessage } from 'src/app/models/dechat/chat-message.model';
import { User } from 'src/app/models/dechat/user.model';
import { Observable, of } from 'rxjs';
import { ChatInfo } from 'src/app/models/dechat/chat-info.model';
import { MessageBundle } from 'src/app/models/dechat/message-bundle.model';
import { UserService } from './user.service';
import { FilesService } from './files.service';
import { MessageService } from './message.service';
import { InboxService } from './inbox.service';

import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    // Attributes //
    user: User;
    userName: Observable<string>;

    allChats: ChatInfo[];

    // We will also store the current chat data
    ready: any[];

  // Constructor //
  constructor(
    private userService : UserService,
    private files : FilesService,
    private messages : MessageService,
    private inbox : InboxService
  ) {   

        this.ready = [];
        this.allChats = [];

        this.setUp();
    }

    async setUp() {

    await 1;
    this.user = await this.userService.getUser();
    this.messages.setCurrentUser(this.user);
    var contacts = await this.userService.getContacts();
    
    await this.files.checkUserFiles(this.user);

    console.log("Checking existent chats...");
    
    var chatFolder = await this.files.getChatsRootUrl(this.user);
    var chats = await this.files.readFolderSubfolders(chatFolder);
    chats.forEach(async chat => {
      this.allChats.push(await this.fetchChat(chat));
    });


    // TODO remove this Testing stuff
    if (chats.length == 0) {
      contacts.forEach(async c => {
        this.allChats.push(this.createChat(c));
      });
    }

  }

  // Given a ChatInfo object, we will open the chat
  async openChat(chatInfo: ChatInfo) : Promise<void> {

      this.messages.setCurrentChat(chatInfo);

      if (this.ready.length === 0) {
          this.ready.push(true);
      }

      // Update file system
      this.files.checkChatFolder(chatInfo);
  }

  getAllChats(): Observable<ChatInfo[]> {
      return of(this.allChats);
  }

  isReady(): Observable<boolean[]> {
      return of(this.ready);
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  /*                                                           */
  /*                 CHAT CREATION AND EDITION                 */
  /*                                                           */

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  isAdmin(chat: ChatInfo): boolean {
      return chat.administrators.includes(this.user);
  }

  /*
    * Normal chats behave the same as group chats, so
    * we create a group chat with just both this user and
    * the other one.
    */
  createChat(otherUser: User): ChatInfo {
      return this.createGroupChat(otherUser.nickname, [otherUser]);
  }

  createGroupChat(chatName: string, otherUsers: User[]): ChatInfo {
    let chat: ChatInfo;

    var id : string = uuid();
    id = id.replace(/-/g, '');
    console.log("New chat id: " + id);
    otherUsers.push(this.user);

    chat = new ChatInfo(id);
    chat.chatName = chatName;
    chat.users.push(this.user);

    this.files.checkChatFolder(chat);

    return chat;
  }

  addUserToChat(chat: ChatInfo, user: User) : boolean {
    if (!this.isAdmin(chat))
      return false;

    chat.users.push(this.user);
    this.files.checkChatFolder(chat);
    return true;
  }


  

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  /*                                                           */
  /*                        CHAT FETCHING                      */
  /*                                                           */
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  async fetchChat(chatUrl : string) : Promise<ChatInfo> {
    
    var chat : ChatInfo;
    var id = chatUrl;

    // TODO get the chat data file, with name and users

    var dataFile = chatUrl + "data.txt";
    var file = await this.files.readFile(dataFile);
    
    var chat : ChatInfo = JSON.parse(file);
/*
    var data = JSON.parse(file);

    chat = new ChatInfo(id);
    chat.chatName = data.name;
    data.users.forEach(user => {
      chat.users.push(this.user);
    });
  */

    // TODO load messages

    return chat;
  }

}
