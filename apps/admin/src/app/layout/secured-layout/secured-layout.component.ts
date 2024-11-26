import { Component } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'admin-secured-layout',
  templateUrl: './secured-layout.component.html',
  styleUrl: './secured-layout.component.scss',
})
export class SecuredLayoutComponent {
  constructor(public themeService: ThemeService) {}
}
