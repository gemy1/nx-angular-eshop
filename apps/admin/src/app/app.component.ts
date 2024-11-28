import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'admin-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(
    private primeConfig: PrimeNGConfig,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('ar');
  }

  ngOnInit(): void {
    this.primeConfig.ripple = true;
  }
}
