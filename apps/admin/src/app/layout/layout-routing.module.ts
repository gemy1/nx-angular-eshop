import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { SecuredLayoutComponent } from './secured-layout/secured-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SecuredLayoutComponent,
    children: [
      {
        path: 'category',
        loadChildren: () =>
          import('../category/category.module').then((m) => m.CategoryModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
