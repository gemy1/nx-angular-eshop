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
    const window = this.document.defaultView;
    const preloader = this.document.querySelector('.loader-overlay');
    if (document.readyState === 'complete') {
      preloader?.classList.add('pre-loader-none');
    } else {
      window?.addEventListener('load', () => {
        preloader?.classList.add('pre-loader-none');
      });
    }
  }
}
