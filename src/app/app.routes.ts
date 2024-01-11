import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authenticate/login/login.component';
import { RegistrationComponent } from './components/authenticate/registration/registration.component';
import { authGuard } from './guards/auth.guard';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { SelectUsernameComponent } from './components/authenticate/select-username/select-username.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    {path: '',              component: HomeComponent},
    {path: 'login',         component: LoginComponent},
    {path: 'createUser',    component: RegistrationComponent },
    {path: 'authenticate',  component: AuthenticateComponent},
    {path: 'username',      component: SelectUsernameComponent},
    {path: 'details/:id',   component: ProductsComponent}
];
// , canActivate: [authGuard]
