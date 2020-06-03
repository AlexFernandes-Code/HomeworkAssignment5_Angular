import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CustomerComponent } from './modules/customer/customer.component';
import { ProductComponent } from './modules/product/product.component';
import { OrderComponent } from './modules/order/order.component';
import { SupplierComponent } from './modules/supplier/supplier.component';
import { LoginComponent } from './modules/login/login.component';
import { DefaultGuard } from './gaurds/default.guard';
import { LoginGuard } from './gaurds/login.guard';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'home',
    component: DashboardComponent,   
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'supplier',
    component: SupplierComponent
  },
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
