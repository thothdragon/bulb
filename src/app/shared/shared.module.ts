import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    IonicModule,
    RouterModule,
    
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
