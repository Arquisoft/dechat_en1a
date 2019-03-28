
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';



// Components
import { AppComponent } from './app.component';
import {LoginPopupComponent} from './login-popup/login-popup.component';
import {LoginComponent} from './login/login.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';

import { ChatFormComponent } from './chatComponents/chat-form/chat-form.component';
import { ChatroomComponent } from './chatComponents/chatroom/chatroom.component';
import { FeedComponent } from './chatComponents/feed/feed.component';
import { MessageComponent } from './chatComponents/message/message.component';
import { NavbarComponent } from './navbar/navbar.component';

import { UserListComponent } from './sidebarComponents/chat-list/chat-list.component';
import { ChatItemComponent } from './sidebarComponents/chat-item/chat-item.component';

import { MainContentComponent } from './main-content/main-content.component';
import { ChatHeaderComponent } from './chatComponents/chat-header/chat-header.component';



// Services
import { AuthService } from './services/solid/solid.auth.service';
import { AuthGuard } from './services/solid/auth.guard.service';
import { ChatService } from './services/dechat/chat.service';



// Miscelanea
import { appRoutes } from '../routes';
import { ProfileIconComponent } from './profile-icon/profile-icon.component';
import { MultimediaComponent } from './chatComponents/multimedia/multimedia.component';
import { MultimediaDisplayComponent } from './chatComponents/multimedia-display/multimedia-display.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPopupComponent,
    DashboardComponent,
    CardComponent,
    RegisterComponent,
    ChatFormComponent,
    ChatroomComponent,
    FeedComponent,
    MessageComponent,
    NavbarComponent,
    UserListComponent,
    ChatItemComponent,
    MainContentComponent,
    ChatHeaderComponent,
    ProfileIconComponent,
    MultimediaComponent,
    MultimediaDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), //RouterModule.forRoot(routes),
    NgSelectModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule //required for toastr
  ],
  providers: [AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
