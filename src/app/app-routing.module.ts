import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGuard } from './core/guards/dashboard.guard';
import { LoginGuard } from './core/guards/login.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddAdminComponent } from './dashboard/pages/admin/add-admin/add-admin.component';
import { AdminComponent } from './dashboard/pages/admin/admin.component';
import { CategoryComponent } from './dashboard/pages/category/category.component';
import { ChartComponent } from './dashboard/pages/chart/chart.component';
import { MyProfileComponent } from './dashboard/pages/my-profile/my-profile.component';
import { OrderComponent } from './dashboard/pages/order/order.component';
import { AddProductComponent } from './dashboard/pages/product/add-product/add-product.component';
import { ProductComponent } from './dashboard/pages/product/product.component';
import { UserComponent } from './dashboard/pages/user/user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  { path: 'dashboard', component: DashboardComponent,canActivate: [DashboardGuard] },
  { path: '', component: DashboardComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'order', component: OrderComponent },
  { path: 'product', component: ProductComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'user', component: UserComponent },
  { path: 'add-admin', component: AddAdminComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: 'category', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }