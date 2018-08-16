import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
} from "@angular/material";



@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule
  ],

  exports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule
  ],

  declarations: []
})
export class CustomMaterialModule {}
