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
import { MenuComponent } from './components/layout/menu/menu.component'
import { MarketPlaceComponent } from './components/layout/market-place/market-place.component'
import { SocialMediaComponent } from './components/layout/social-media/social-media.component'
import { BrandComponent } from './components/layout/brand/brand.component'

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
    FormWizardComponent,
    MenuComponent,
    MarketPlaceComponent,
    SocialMediaComponent,
    BrandComponent
  ],
  exports: [
    CommonModule,
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarLeftComponent,
    HeaderComponent,
    BreadCrumbComponent,
    FormWizardComponent,
    MenuComponent,
    MarketPlaceComponent,
    SocialMediaComponent,
    BrandComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
} )
export class SharedModule { }
