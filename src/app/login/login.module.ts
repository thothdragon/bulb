import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { StatusComponent } from './status/status.component';
import { UserOnlineComponent } from './user-online/user-online.component';



@NgModule({
  declarations: [
    LoginComponent,
    StatusComponent,
    UserOnlineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    StatusComponent,
    UserOnlineComponent
  ]
})
export class LoginModule { }
