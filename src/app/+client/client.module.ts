import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

// modules
import { ClientRoutingModule } from './client-routing.module'
import { SharedModule } from '../shared'

// components
import { ClientComponent } from './client.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { OrderIndexComponent } from './order/index.component'
import { OrderDetailsComponent } from './order/details.component'
import { UserIndexComponent } from './user/index.component'
import { UserFormComponent } from './user/form.component'
import { DriverIndexComponent } from './driver/index.component'
import { DriverFormComponent } from './driver/form.component'
import { BusinessIndexComponent } from './business/index.component'
import { BusinessFormComponent } from './business/form.component'
import { VehicleIndexComponent } from './vehicle/index.component'
import { VehicleFormComponent } from './vehicle/form.component'
import { ConfigOrderComponent } from './config/order/order.component'
import { ConfigBonusComponent } from './config/bonus/bonus.component'
import { ConfigVehicleIndexComponent } from './config/vehicle/index.component'
import { ConfigVehicleFormComponent } from './config/vehicle/form.component'
import { ConfigExtraIndexComponent } from './config/extra/index.component'
import { ConfigExtraFormComponent } from './config/extra/form.component'
import { ConfigObjectIndexComponent } from './config/object/index.component'
import { ConfigObjectFormComponent } from './config/object/form.component'
import { TeamIndexComponent } from './team/index.component'
import { TeamFormComponent } from './team/form.component'
import { FaqIndexComponent } from './faq/index.component'
import { FaqFormComponent } from './faq/form.component'
import { SupportComponent } from './support/support.component'

@NgModule( {
  imports: [
    ClientRoutingModule,
    SharedModule
  ],
  declarations: [
    ClientComponent,
    BusinessFormComponent,
    BusinessIndexComponent,
    ConfigBonusComponent,
    ConfigOrderComponent,
    ConfigVehicleFormComponent,
    ConfigVehicleIndexComponent,
    ConfigExtraFormComponent,
    ConfigExtraIndexComponent,
    ConfigObjectFormComponent,
    ConfigObjectIndexComponent,
    DashboardComponent,
    DriverFormComponent,
    DriverIndexComponent,
    FaqFormComponent,
    FaqIndexComponent,
    OrderDetailsComponent,
    OrderIndexComponent,
    SupportComponent,
    SupportComponent,
    TeamFormComponent,
    TeamIndexComponent,
    UserFormComponent,
    UserIndexComponent,
    VehicleFormComponent,
    VehicleIndexComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ClientModule { }
