import { Routes } from '@angular/router';
import { LoginComponent } from './dashboard/login-component/login-component';
import { WelcomeComponent } from './welcome-component/welcome-component';
import { ErrorComponent } from './error-component/error-component';
import { HabitTracker } from './habit-tracker/habit-tracker';
import { LogoutComponent } from './dashboard/logout-component/logout-component';

export const routes: Routes = [
    { path:'',component: LoginComponent },
    { path:'login',component: LoginComponent },
    { path:'welcome/:username',component: WelcomeComponent },
    { path:'habit-tracker/:username',component:HabitTracker},
    { path:'logout',component:LogoutComponent},
    { path:'**',component: ErrorComponent }
];
