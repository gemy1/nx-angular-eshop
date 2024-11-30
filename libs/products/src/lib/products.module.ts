import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';

@NgModule({
  imports: [CommonModule],
  providers: [provideHttpClient(withFetch(), withInterceptorsFromDi())],
})
export class ProductsModule {}
