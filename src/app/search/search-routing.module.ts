import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchdataComponent } from './searchdata/searchdata.component';

const routes: Routes = [ { path: '', component: SearchdataComponent } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
