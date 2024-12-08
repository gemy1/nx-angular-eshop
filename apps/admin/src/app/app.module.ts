import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

import { TranslationModule } from '@e-shop/translation';
import { AuthModule } from '@e-shop/auth';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    CategoryModule,
    CoreModule,
    TranslationModule,
    AuthModule,
    ProductModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
