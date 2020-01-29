import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    IonicModule,
    RouterModule
  ]
})
export class SharedModule { }
