import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyaccountComponent } from "./myaccount/myaccount.component";
import { MyordersComponent } from "./myorders/myorders.component";

const routes: Routes = [
  {
    path:'',
    component:MyaccountComponent
  },
  {
    path:'myorders',
    component:MyordersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
