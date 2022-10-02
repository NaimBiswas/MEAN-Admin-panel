import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
      ProductComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
