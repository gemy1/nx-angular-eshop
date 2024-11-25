import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'admin-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[] = [];
  ngOnInit(): void {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: ['/'] },
      { label: 'Products', icon: 'pi pi-barcode', routerLink: ['/products'] },
      {
        label: 'Categories',
        icon: 'pi pi-th-large',
        routerLink: ['/categories'],
      },
      { label: 'Orders', icon: 'pi pi-cart-plus', routerLink: ['/orders'] },
      { label: 'Users', icon: 'pi pi-user', routerLink: ['/users'] },
    ];
  }
}
