import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChannelComponent } from './channel.component';


const routes: Routes = [
  {
    path: `channel`,
    component: ChannelComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ChannelRoutingModule { }
