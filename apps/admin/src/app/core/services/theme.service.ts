import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private styleLink: HTMLLinkElement | null = null;

  theme = 'light';
  sidebarVisible = false;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initializeTheme() {
    const storedTheme = localStorage.getItem('admin-theme');
    if (storedTheme) {
      this.setTheme(storedTheme);
      this.theme = storedTheme;
    } else {
      this.setTheme('light');
    }
  }

  setTheme(theme: string) {
    if (this.styleLink) {
      this.styleLink.href = theme + '.css';
    } else {
      this.styleLink = this.renderer.createElement('link') as HTMLLinkElement;
      this.styleLink.rel = 'stylesheet';
      this.styleLink.type = 'text/css';
      this.styleLink.href = theme + '.css';

      this.renderer.appendChild(document.head, this.styleLink);
    }

    this.theme = theme;
    localStorage.setItem('admin-theme', theme);
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(this.theme);
  }
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
