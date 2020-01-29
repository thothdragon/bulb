import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ChannelComponent } from './channel/channel.component';


const routes: Routes = [
  {
    path: `login`, component: LoginComponent
  },
  {
    path: `profile`, component: ProfileComponent
  },
  {
    path: `channel`, component: ChannelComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
