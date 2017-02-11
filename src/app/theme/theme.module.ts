import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { ApiService } from '../../providers'
import { ThemeService } from './theme.service'

import { HeaderComponent } from './header/header.component'
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component'
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component'
import { FormWizardComponent } from './form-wizard/form-wizard.component'

@NgModule({
  declarations: [SidebarLeftComponent, HeaderComponent, BreadCrumbComponent, FormWizardComponent],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService, ThemeService],
  exports: [SidebarLeftComponent, HeaderComponent, BreadCrumbComponent, FormWizardComponent]
})
export class ThemeModule { }
