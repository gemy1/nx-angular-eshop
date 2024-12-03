import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRedirectGuard } from './guards/auth-redirect.guard';

export const authRoutes: Route[] = [
  {
    path: 'auth',
    canActivate: [AuthRedirectGuard],
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];
