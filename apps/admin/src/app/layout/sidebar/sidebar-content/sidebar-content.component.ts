import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '@e-shop/auth';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'admin-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrl: './sidebar-content.component.scss',
})
export class SidebarContentComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router, private authService: AuthService) {}

  userInfo!: User;

  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo();

    this.items = [
      {
        label: 'Dashboard',
        disabled: true,
        style: { 'margin-left': '-10px' },
      },

      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLinkActiveOptions: { exact: true },
        route: '/dashboard',
      },
      {
        label: 'Categories',
        icon: 'pi pi-list',
        style: { display: this.userInfo.role === 'admin' ? 'block' : 'none' },

        items: [
          {
            label: 'All',
            icon: 'pi pi-angle-right',
            route: '/dashboard/category',
          },
          {
            label: 'New',
            icon: 'pi pi-angle-right',
            route: '/dashboard/category',
            queryParams: { cat: 'new' },
          },
        ],
      },
      {
        label: 'Products',
        icon: 'pi pi-box',
        items: [
          {
            label: 'All',
            icon: 'pi pi-angle-right',
            route: '/dashboard/product',
          },
          {
            label: 'New',
            icon: 'pi pi-angle-right',
            route: '/dashboard/product/:id',
          },
        ],
      },
      {
        label: 'Orders',
        icon: 'pi pi-shopping-cart',
        items: [{ label: 'All', icon: 'pi pi-angle-right' }],
      },
      {
        label: 'Users',
        icon: 'pi pi-user',
        items: [
          { label: 'All', icon: 'pi pi-angle-right' },
          { label: 'New', icon: 'pi pi-angle-right' },
        ],
      },
      {
        label: 'Options',
        disabled: true,
        style: { 'margin-left': '-10px' },
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
      },
    ];
  }
}
