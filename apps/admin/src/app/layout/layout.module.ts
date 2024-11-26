import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { SecuredLayoutComponent } from './secured-layout/secured-layout.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { LoginComponent } from './login/login.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarContentComponent } from './sidebar/sidebar-content/sidebar-content.component';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule,
  ],
})
export class LayoutModule {}
