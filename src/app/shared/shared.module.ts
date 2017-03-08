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
    BrandComponent
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
    BrandComponent,
    Ng2BreadcrumbModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
} )
export class SharedModule { }
