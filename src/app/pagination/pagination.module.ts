import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationRoutingModule } from './pagination-routing.module';
import { BtnpaginationComponent } from './btnpagination/btnpagination.component';


@NgModule({
  declarations: [BtnpaginationComponent],
  imports: [
    CommonModule,
    PaginationRoutingModule
  ],
  exports: [
    BtnpaginationComponent
  ]
})
export class PaginationModule { }
