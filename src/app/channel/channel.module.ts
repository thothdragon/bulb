import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelComponent } from './channel.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ChannelComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChannelComponent,
    InputComponent
  ]
})
export class ChannelModule { }
