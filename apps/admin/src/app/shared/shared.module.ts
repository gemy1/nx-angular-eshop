import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConfirmationService, MessageService } from 'primeng/api';

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
import { AvatarModule } from 'primeng/avatar';
import { SpeedDialModule } from 'primeng/speeddial';
import { BadgeModule } from 'primeng/badge';
import { PanelMenuModule } from 'primeng/panelmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { TranslateModule } from '@ngx-translate/core';

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
  AvatarModule,
  SpeedDialModule,
  BadgeModule,
  PanelMenuModule,
  OverlayPanelModule,
  MessagesModule,
  TableModule,
  ToolbarModule,
  DialogModule,
  ColorPickerModule,
  InputTextareaModule,
  ConfirmPopupModule,
  ToastModule,
];

@NgModule({
  declarations: [],
  providers: [ConfirmationService, MessageService],
  imports: [CommonModule, FormsModule, ...primeNg, TranslateModule.forChild()],
  exports: [...primeNg, FormsModule, TranslateModule],
})
export class SharedModule {}
