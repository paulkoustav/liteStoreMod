import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', loadChildren: () => import('./product/product.module').then(mod => mod.ProductModule) },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(mod => mod.CustomerModule) },
  { path: 'order', loadChildren: () => import('./order/order.module').then(mod => mod.OrderModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(mod => mod.UserModule) },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
