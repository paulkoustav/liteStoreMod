import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CartComponent } from './cart/cart.component';
import { OrderFailComponent } from './order-fail/order-fail.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { NetPayPipePipe } from './net-pay-pipe.pipe';


@NgModule({
  declarations: [CartComponent, OrderFailComponent, OrderSuccessComponent, NetPayPipePipe],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
