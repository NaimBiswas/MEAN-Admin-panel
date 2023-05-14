import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { HeaderTopComponent } from './shared/header-top/header-top.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ChartComponent } from './dashboard/pages/chart/chart.component';
import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';
import { OrderComponent } from './dashboard/pages/order/order.component';
import { ProductComponent } from './dashboard/pages/product/product.component';
import { AddProductComponent } from './dashboard/pages/product/add-product/add-product.component';
import { SuccessComponent } from './shared/alert/success/success.component';
import { UserComponent } from './dashboard/pages/user/user.component';
import { AdminComponent } from './dashboard/pages/admin/admin.component';
import { MyProfileComponent } from './dashboard/pages/my-profile/my-profile.component';
import { AddAdminComponent } from './dashboard/pages/admin/add-admin/add-admin.component';
import { CategoryComponent } from './dashboard/pages/category/category.component';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { ErrorInterceptor } from './core/error-handler.service';
import { DataLoaderComponent } from './shared/data-loader/data-loader.component';
import { ErrorShowPopupComponent } from './shared/error-show-popup/error-show-popup.component';
import { ErrorMessageShowComponent } from './shared/error-message-show/error-message-show.component';

@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
      DashboardComponent,
      SpinnerComponent,
      SideNavComponent,
      HeaderTopComponent,
      FooterComponent,
      ChartComponent,
      ScrollToTopComponent,
      OrderComponent,
      ProductComponent,
      AddProductComponent,
      SuccessComponent,
      UserComponent,
      AdminComponent,
      MyProfileComponent,
      AddAdminComponent,
      CategoryComponent,
      PaginationComponent,
      DataLoaderComponent,
      ErrorShowPopupComponent,
      ErrorMessageShowComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
