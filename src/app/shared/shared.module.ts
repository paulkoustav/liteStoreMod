import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AddupdatecartbtnComponent } from './addupdatecartbtn/addupdatecartbtn.component';
import { FileuploadComponent } from './fileupload/fileupload.component';


@NgModule({
  declarations: [AddupdatecartbtnComponent, FileuploadComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [AddupdatecartbtnComponent,FileuploadComponent]
})
export class SharedModule { }
