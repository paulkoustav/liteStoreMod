import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { SharedModule } from '../shared/shared.module';
import { UserdataService } from './userdata.service';
import {AuthService} from './auth.service';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  providers: [UserdataService,AuthService]
})
export class UserModule { }
