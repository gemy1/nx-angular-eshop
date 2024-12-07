import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { LanguageService } from './core/services/language.service';
import { PreLoaderService } from './core/services/pre-loader.service';

@Component({
  selector: 'admin-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(
    private primeConfig: PrimeNGConfig,
    private language: LanguageService,
    private preloadService: PreLoaderService
  ) {
    const lang = localStorage.getItem('admin-language') ?? 'en';
    this.language.setLanguage(lang);
  }

  ngOnInit(): void {
    this.primeConfig.ripple = true;
    this.preloadService.hidePreloader();
  }
}
