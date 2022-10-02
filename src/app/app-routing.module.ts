import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './dashboard/pages/admin/admin.component';
import { ChartComponent } from './dashboard/pages/chart/chart.component';
import { OrderComponent } from './dashboard/pages/order/order.component';
import { AddProductComponent } from './dashboard/pages/product/add-product/add-product.component';
import { ProductComponent } from './dashboard/pages/product/product.component';
import { UserComponent } from './dashboard/pages/user/user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: DashboardComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'order', component: OrderComponent },
  { path: 'product', component: ProductComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }