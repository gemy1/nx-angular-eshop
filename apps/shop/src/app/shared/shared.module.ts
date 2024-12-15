import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AnimateModule } from 'primeng/animate';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';

const primeNg = [
  ButtonModule,
  RippleModule,
  AnimateModule,
  IconFieldModule,
  InputIconModule,
  InputTextModule,
  BadgeModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...primeNg],
  exports: [...primeNg],
})
export class SharedModule {}
