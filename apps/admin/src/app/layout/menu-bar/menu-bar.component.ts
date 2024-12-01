import { Component, OnInit } from '@angular/core';
import { MenuItem, Message } from 'primeng/api';
import { ThemeService } from '../../core/services/theme.service';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'admin-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent implements OnInit {
  userItems: MenuItem[] = [];
  langItems: MenuItem[] = [];
  messages: Message[] = [];

  constructor(
    public themeService: ThemeService,
    private language: LanguageService
  ) {}

  ngOnInit(): void {
    this.messages = [
      {
        severity: 'success',
        detail: 'You have successfully logged in.',
      },
      {
        severity: 'info',
        detail: 'You have new mail',
      },
    ];

    this.userItems = [
      {
        tooltipOptions: {
          tooltipLabel: 'Edit',
        },
        icon: 'pi pi-pencil',
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Logout',
        },
        icon: 'pi pi-sign-out',
      },
    ];

    this.langItems = [
      {
        tooltipOptions: {
          tooltipLabel: 'Arabic',
        },
        icon: 'pi pi-language',
        command: () => {
          this.language.setLanguage('ar');
        },
      },
      {
        tooltipOptions: {
          tooltipLabel: 'English',
        },
        icon: 'pi pi-language',
        command: () => {
          this.language.setLanguage('en');
        },
      },
    ];
  }
}
