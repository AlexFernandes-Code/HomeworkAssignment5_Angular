import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductComponent } from 'src/app/modules/product/product.component';
import { OrderComponent } from 'src/app/modules/order/order.component';
import { CustomerComponent } from 'src/app/modules/customer/customer.component';
import { SupplierComponent } from 'src/app/modules/supplier/supplier.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    CustomerComponent,
    ProductComponent,
    OrderComponent,
    SupplierComponent,
    LoginComponent,

    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    ChartsModule
    
  ]
})
export class DefaultModule { }
