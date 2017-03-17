import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb'
import { TextMaskModule } from 'angular2-text-mask'

import {
  HeaderComponent,
  SidebarLeftComponent,
  MenuComponent,
  MarketPlaceComponent,
  SocialMediaComponent,
  BrandComponent,
  ImageUploadComponent,
  SpinnerComponent,
  ProgressBarComponent,
  StepsComponent,
  StepComponent,
  WizardComponent,
  WizardStepComponent
} from './components'


import { StyleUrlPipe } from './pipes'

@NgModule( {
  imports: [
    CommonModule,
    TextMaskModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    Ng2BreadcrumbModule.forRoot()
  ],
  declarations: [
    SidebarLeftComponent,
    HeaderComponent,
    MenuComponent,
    MarketPlaceComponent,
    SocialMediaComponent,
    BrandComponent,
    StyleUrlPipe,
    ImageUploadComponent,
    SpinnerComponent,
    ProgressBarComponent,
    StepsComponent,
    StepComponent,
    WizardComponent,
    WizardStepComponent
  ],
  exports: [
    CommonModule,
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarLeftComponent,
    HeaderComponent,
    MenuComponent,
    MarketPlaceComponent,
    SocialMediaComponent,
    ImageUploadComponent,
    BrandComponent,
    Ng2BreadcrumbModule,
    StyleUrlPipe,
    SpinnerComponent,
    ProgressBarComponent,
    StepsComponent,
    StepComponent,
    WizardComponent,
    WizardStepComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
