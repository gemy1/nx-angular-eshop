import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { MenuComponent } from './components/menu/menu.component';
import { IconsComponent } from './components/icons/icons.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PublicLayoutComponent, SearchComponent, MenuComponent, IconsComponent],
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
})
export class LayoutModule {}
