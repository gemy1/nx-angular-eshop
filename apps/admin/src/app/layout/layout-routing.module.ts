import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecuredLayoutComponent } from './secured-layout/secured-layout.component';
import { AuthGuard } from '@e-shop/auth';

const routes: Routes = [
  {
    path: 'dashboard',
    component: SecuredLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'category',
        loadChildren: () =>
          import('../category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('../product/product.module').then((m) => m.ProductModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
