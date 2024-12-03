import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { authRoutes } from './lib.routes';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { MessagesModule } from 'primeng/messages';

const primeNgModule = [
  ButtonModule,
  InputTextModule,
  CheckboxModule,
  MessagesModule,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    ...primeNgModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  declarations: [LoginComponent, RegisterComponent],
})
export class AuthModule {}
