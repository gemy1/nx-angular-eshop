import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';

export const preloadTheme = (themeService: ThemeService) => {
  return () => themeService.initializeTheme();
};

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: preloadTheme,
      deps: [ThemeService],
      multi: true,
    },
  ],
})
export class CoreModule {}
