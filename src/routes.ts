import { Routes } from '@angular/router';
import { SignupFormComponent } from './app/signup-form/signup-form.component';
import { LoginFormComponent } from './app/login-form/login-form.component';
import { MainContentComponent } from './app/main-content/main-content.component'

/*
    Here we specify the routes of the app.
    
    If we say "dechat/signup", we'll want the
    app to go to the signup form component.
*/
export const appRoutes: Routes = [

    { path: 'signup', component: SignupFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'chat', component: MainContentComponent },
    { path: '', redirectTo: '/chat', pathMatch: 'full' },

    /* Default generated routes
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'login-popup',
      component: LoginPopupComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'card',
      component: CardComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'register',
      component: RegisterComponent
    }
    */
  ];