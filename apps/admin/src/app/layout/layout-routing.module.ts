import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { LoginComponent } from './login/login.component';
import { SecuredLayoutComponent } from './secured-layout/secured-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SecuredLayoutComponent,
  },
  {
    path: '',
    component: PublicLayoutComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
