import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { TextMaskModule } from 'angular2-text-mask'

@NgModule( {
  imports: [
    CommonModule,
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule
  ]
} )
export class SharedModule { }
