import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { OrderFailComponent } from './order-fail/order-fail.component';
import { OrderSuccessComponent} from './order-success/order-success.component';


const routes: Routes = [
  {
    path:'',
    component:CartComponent
  },
  {
    path:'fail',
    component:OrderFailComponent
  },
  {
    path:'success',
    component:OrderSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
