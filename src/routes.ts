import { Routes } from '@angular/router';
import { MainContentComponent } from './app/main-content/main-content.component'
import { LoginComponent } from './app/login/login.component';
import { CardComponent } from './app/card/card.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { LoginPopupComponent } from './app/login-popup/login-popup.component';
import { AuthGuard } from './app/services/solid/auth.guard.service';
import { AuthService } from './app/services/solid/solid.auth.service';

/*
    Here we specify the routes of the app.
    
    If we say "dechat/signup", we'll want the
    app to go to the signup form component.
*/
export const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },

    { path: 'login-popup', component: LoginPopupComponent },

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
    }
    
    /* Default generated routes
    
    {
      path: 'register',
      component: RegisterComponent
    }
    */
  ];