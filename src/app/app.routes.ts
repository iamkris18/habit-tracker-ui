import { Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { WelcomeComponent } from './welcome-component/welcome-component';
import { ErrorComponent } from './error-component/error-component';
import { HabitTracker } from './habit-tracker/habit-tracker';
import { LogoutComponent } from './logout-component/logout-component';
import { authenticatedRoute } from './security/route.activate';

export const routes: Routes = [
    { path:'',component: LoginComponent },
    { path:'login',component: LoginComponent },
    { path:'welcome/:username',component: WelcomeComponent,
    canActivate: [authenticatedRoute] },
    { path:'habit-tracker/:username',component:HabitTracker,
    canActivate: [authenticatedRoute]},
    { path:'logout',component:LogoutComponent,
    canActivate: [authenticatedRoute]},
    { path:'**',component: ErrorComponent }
];
