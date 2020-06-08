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
import { ErrorComponent } from './modules/error/error.component';
import { RegisterComponent } from './modules/register/register.component';
import { EmpGuard } from './gaurds/emp.guard';


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
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'customer',
    component: CustomerComponent,
    canActivate: [DefaultGuard]
  },
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [EmpGuard]
  },
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [DefaultGuard]
  },
  {
    path: 'supplier',
    component: SupplierComponent,
    canActivate: [DefaultGuard]
  },
  {
    path: 'error',
    component: ErrorComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
