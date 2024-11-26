import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { StyleClassModule } from 'primeng/styleclass';
import { SidebarModule } from 'primeng/sidebar';

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
  StyleClassModule,
  SidebarModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...primeNg],
  exports: [...primeNg],
})
export class SharedModule {}
