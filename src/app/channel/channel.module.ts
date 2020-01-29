import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelComponent } from './channel.component';
import { InputComponent } from './input/input.component';
import { ChannelRoutingModule } from './channel-routing.module';



@NgModule({
  declarations: [
    ChannelComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ChannelRoutingModule
  ]
})
export class ChannelModule { }
