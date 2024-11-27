import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'admin-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(public themeService: ThemeService) {}
  ngOnInit(): void {
    this.items = [
      {
        tooltipOptions: {
          tooltipLabel: 'Edit',
        },
        icon: 'pi pi-pencil',
        style: { 'margin-bottom': '10px' },
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Logout',
        },
        icon: 'pi pi-sign-out',
      },
    ];
  }
}
