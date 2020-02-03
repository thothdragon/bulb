import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

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
    FormsModule,

    HttpClientModule,
  ]
})
export class SharedModule { }
