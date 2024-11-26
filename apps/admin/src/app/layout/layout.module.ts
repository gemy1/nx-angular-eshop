import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { SecuredLayoutComponent } from './secured-layout/secured-layout.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { LoginComponent } from './login/login.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

// PrimeNG modules
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarContentComponent } from './sidebar/sidebar-content/sidebar-content.component';

const primeNg = [
  InputTextModule,
  PasswordModule,
  ButtonModule,
  InputGroupModule,
  InputGroupAddonModule,
  DividerModule,
  CardModule,
  CheckboxModule,
  MenubarModule,
  RippleModule,
];

@NgModule({
  declarations: [
    SecuredLayoutComponent,
    PublicLayoutComponent,
    LoginComponent,
    MenuBarComponent,
    SidebarComponent,
    SidebarContentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    ...primeNg,
  ],
})
export class LayoutModule {}
