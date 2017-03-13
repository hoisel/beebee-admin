import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { PlatformRoutingModule } from './platform-routing.module'
import { PlatformComponent } from './platform.component'
import { SharedModule } from '../shared'
import { BonusComponent } from './bonus/bonus.component'
import { InvitedComponent } from './bonus/invited/invited.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProfileComponent } from './profile/profile.component'
import { RequestFreightComponent } from './freight/request-freight/request-freight.component'
import { ProvideFreightComponent } from './freight/provide-freight/provide-freight.component'

@NgModule( {
  imports: [
    PlatformRoutingModule,
    SharedModule
  ],
  declarations: [
    BonusComponent,
    InvitedComponent,
    DashboardComponent,
    ProfileComponent,
    PlatformComponent,
    RequestFreightComponent,
    ProvideFreightComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PlatformModule { }
