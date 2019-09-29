import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { ProductsComponent } from './products/products.component';
import { BtnpaginationComponent } from './btnpagination/btnpagination.component';


@NgModule({
  declarations: [ProductsComponent, BtnpaginationComponent],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
