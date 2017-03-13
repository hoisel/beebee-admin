import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PlatformRoutingModule } from './platform-routing.module'
import { PlatformComponent } from './platform.component'
import { SharedModule } from '../shared'
import { BonusComponent } from './bonus/bonus.component'
import { InvitedComponent } from './bonus/invited/invited.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProfileComponent } from './profile/profile.component'

@NgModule( {
  imports: [
    CommonModule,
    PlatformRoutingModule,
    SharedModule
  ],
  declarations: [
    BonusComponent,
    InvitedComponent,
    DashboardComponent,
    ProfileComponent,
    PlatformComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PlatformModule { }
