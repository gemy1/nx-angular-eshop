import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreLoaderService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  startPreloader() {
    this.document.body.classList.add('preloader-active');
  }

  hidePreloader() {
    const widows = this.document.defaultView;
    widows?.addEventListener('load', () => {
      const preloader = this.document.querySelector('.loader-overlay');
      preloader?.classList.add('pre-loader-none');
    });
  }
}
