import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { StatusComponent } from './status/status.component';
import { UserOnlineComponent } from './user-online/user-online.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    StatusComponent,
    UserOnlineComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent,
    StatusComponent,
    UserOnlineComponent
  ]
})
export class LoginModule { }
