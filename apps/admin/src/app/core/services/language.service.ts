import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private Translate: TranslateService) {}

  setLanguage(language?: string): void {
    language = language ?? 'en';

    localStorage.setItem('admin-language', language);

    this.Translate.use(language);
  }
}
