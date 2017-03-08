import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { TextMaskModule } from 'angular2-text-mask'

import {
  HeaderComponent,
  SidebarLeftComponent,
  BreadCrumbComponent,
  FormWizardComponent
} from './components/layout'

@NgModule( {
  imports: [
    CommonModule,
    TextMaskModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    SidebarLeftComponent,
    HeaderComponent,
    BreadCrumbComponent,
    FormWizardComponent
  ],
  exports: [
    CommonModule,
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarLeftComponent,
    HeaderComponent,
    BreadCrumbComponent,
    FormWizardComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
