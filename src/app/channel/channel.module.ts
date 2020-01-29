import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelComponent } from './channel.component';
import { InputComponent } from './input/input.component';
import { ChannelRoutingModule } from './channel-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ChannelComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChannelRoutingModule
  ]
})
export class ChannelModule { }
