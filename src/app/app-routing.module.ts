import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(mod => mod.ProductModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(mod => mod.SearchModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(mod => mod.CustomerModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(mod => mod.OrderModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
