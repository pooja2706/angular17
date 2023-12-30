import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authenticate/login/login.component';
import { RegistrationComponent } from './components/authenticate/registration/registration.component';
import { authGuard } from './guards/auth.guard';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';

export const routes: Routes = [
    {path: '',              component: HomeComponent, canActivate: [authGuard]},
    {path: 'login',         component: LoginComponent},
    {path: 'createUser',    component: RegistrationComponent },
    {path: 'authenticate',  component: AuthenticateComponent}
];
