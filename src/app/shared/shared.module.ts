import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb'
import { TextMaskModule } from 'angular2-text-mask'

import {
  HeaderComponent,
  SidebarLeftComponent,
  FormWizardComponent
} from './components/layout'

import { MenuComponent } from './components/layout/menu/menu.component'
import { MarketPlaceComponent } from './components/layout/market-place/market-place.component'
import { SocialMediaComponent } from './components/layout/social-media/social-media.component'
import { BrandComponent } from './components/layout/brand/brand.component'
import { ImageUploadComponent } from './components/image-upload/image-upload.component'

import { StyleUrlPipe } from './pipes'
import { SpinnerComponent } from './components/spinner/spinner.component'
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component'
import { StepsComponent } from './components/steps/steps.component'
import { StepComponent } from './components/steps/step/step.component'

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
    FormWizardComponent,
    MenuComponent,
    MarketPlaceComponent,
    SocialMediaComponent,
    BrandComponent,
    StyleUrlPipe,
    ImageUploadComponent,
    SpinnerComponent,
    ProgressBarComponent,
    StepsComponent,
    StepComponent
  ],
  exports: [
    CommonModule,
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarLeftComponent,
    HeaderComponent,
    FormWizardComponent,
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
    StepComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
