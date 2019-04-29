// Modules
import {OverlayModule} from '@angular/cdk/overlay';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {NgSelectModule} from '@ng-select/ng-select';
import {ToastrModule} from 'ngx-toastr';

// Components
import {AppComponent} from './app.component';
import {CardComponent} from './card/card.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginPopupComponent} from './login-popup/login-popup.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

import {ChatFormComponent} from './chatComponents/chat-form/chat-form.component';
import {ChatroomComponent} from './chatComponents/chatroom/chatroom.component';
import {FeedComponent} from './chatComponents/feed/feed.component';
import {MessageComponent} from './chatComponents/message/message.component';
import {NavbarComponent} from './navbar/navbar.component';

import {ChatItemComponent} from './sidebarComponents/chat-item/chat-item.component';
import {ChatListComponent} from './sidebarComponents/chat-list/chat-list.component';

import {ChatHeaderComponent} from './chatComponents/chat-header/chat-header.component';
import {MainContentComponent} from './main-content/main-content.component';

// Services
import {ChatService} from './services/dechat/chat.service';
import {AuthGuard} from './services/solid/auth.guard.service';
import {AuthService} from './services/solid/solid.auth.service';

// Miscelanea
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material';
import {MultimediaDisplayComponent} from './chatComponents/multimedia-display/multimedia-display.component';
import {NewChatDialogComponent} from './dialogComponents/new-chat-dialog/new-chat-dialog.component';
import {NewMultimediaDialogComponent} from './dialogComponents/new-multimedia-dialog/new-multimedia-dialog.component';
import {ProfileIconComponent} from './utilComponents/profile-icon/profile-icon.component';
import {UserDisplaySlotComponent} from './utilComponents/user-display-slot/user-display-slot.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},

    {path: 'login-popup', component: LoginPopupComponent},

    {
        path: 'dashboard', component: DashboardComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'card', component: CardComponent,
        canActivate: [AuthGuard],
    },

    {
        path: 'chat', component: MainContentComponent,
        canActivate: [AuthGuard],
    },
];

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
        ChatListComponent,
        ChatItemComponent,
        MainContentComponent,
        ChatHeaderComponent,
        ProfileIconComponent,
        MultimediaDisplayComponent,
        NewChatDialogComponent,
        UserDisplaySlotComponent,
        NewMultimediaDialogComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        NgSelectModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule, // required for toastr
        MatDialogModule,
        OverlayModule,
    ],
    entryComponents: [
        NewChatDialogComponent,
        NewMultimediaDialogComponent,
    ],
    providers: [AuthService, ChatService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
