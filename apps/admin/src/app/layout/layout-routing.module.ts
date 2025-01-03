import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecuredLayoutComponent } from './secured-layout/secured-layout.component';
import { AuthGuard } from '@e-shop/auth';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SecuredLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'product',
        loadChildren: () =>
          import('../product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'category',
        loadChildren: () =>
          import('../category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
