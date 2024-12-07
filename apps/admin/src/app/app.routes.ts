import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    component: AppComponent,
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
];
