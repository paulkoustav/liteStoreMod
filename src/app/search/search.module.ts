import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchdataComponent } from './searchdata/searchdata.component';

import { SharedModule } from '../shared/shared.module';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  declarations: [SearchdataComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    PaginationModule
  ]
})
export class SearchModule { }
