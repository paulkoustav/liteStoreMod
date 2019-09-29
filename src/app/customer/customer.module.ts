import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MyordersComponent } from './myorders/myorders.component';


@NgModule({
  declarations: [MyaccountComponent, MyordersComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
