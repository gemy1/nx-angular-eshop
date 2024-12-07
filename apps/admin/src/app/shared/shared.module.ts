import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TextRichEditorComponent } from './components/text-rich-editor/text-rich-editor.component';

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
import { StepperModule } from 'primeng/stepper';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';

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
  StepperModule,
  DropdownModule,
  FileUploadModule,
];

@NgModule({
  declarations: [TextRichEditorComponent],
  providers: [ConfirmationService, MessageService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...primeNg,
    TranslateModule.forChild(),
    CKEditorModule,
  ],
  exports: [
    ...primeNg,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    TextRichEditorComponent,
  ],
})
export class SharedModule {}
