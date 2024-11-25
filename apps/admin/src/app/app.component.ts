import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'admin-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(
    private primeConfig: PrimeNGConfig,
    private router: Router,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.primeConfig.ripple = true;

    this.items = [
      {
        label: 'Router',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Installation',
            route: '/installation',
          },
          {
            label: 'Configuration',
            route: '/configuration',
          },
        ],
      },
      {
        label: 'Programmatic',
        icon: 'pi pi-link',
        command: () => {
          this.router.navigate(['/installation']);
        },
      },
      {
        label: 'External',
        icon: 'pi pi-home',
        items: [
          {
            label: 'Angular',
            url: 'https://angular.io/',
          },
          {
            label: 'Vite.js',
            url: 'https://vitejs.dev/',
          },
        ],
      },
      {
        label: 'theme',
        icon: 'pi pi-home',
        items: undefined,
        command: () => {
          this.themeService.setTheme(
            this.themeService.theme === 'light' ? 'dark' : 'light'
          );
        },
      },
    ];
  }
}
