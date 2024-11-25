import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SecuredLayoutComponent } from './secured-layout/secured-layout.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PrimeNG modules
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

const primeNg = [
  InputTextModule,
  PasswordModule,
  ButtonModule,
  InputGroupModule,
  InputGroupAddonModule,
  DividerModule,
  CardModule,
  CheckboxModule,
];

@NgModule({
  declarations: [SecuredLayoutComponent, PublicLayoutComponent, LoginComponent, MenuBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    ...primeNg,
  ],
})
export class LayoutModule {}
