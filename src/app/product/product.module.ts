import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [DetailsComponent], 
 imports: [
    CommonModule,
    ProductRoutingModule
  ],
  
})
export class ProductModule { }
