import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatListModule,
  MatButtonModule,
  MatIconModule ,
  MatCardModule

} from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule
  ],

  exports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule
  ],

  declarations: []
})
export class MaterialModule { }
