import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ThemeModule } from './theme/theme.module'
import { AdminComponent } from './admin.component'
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
import { TeamIndexComponent } from './team/index.component'
import { TeamFormComponent } from './team/form.component'
import { FaqIndexComponent } from './faq/index.component'
import { FaqFormComponent } from './faq/form.component'
import { SupportComponent } from './support/support.component'


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ThemeModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    OrderIndexComponent,
    OrderDetailsComponent,
    UserIndexComponent,
    UserFormComponent,
    DriverIndexComponent,
    DriverFormComponent,
    BusinessIndexComponent,
    BusinessFormComponent,
    VehicleIndexComponent,
    VehicleFormComponent,
    ConfigOrderComponent,
    ConfigBonusComponent,
    ConfigVehicleIndexComponent,
    ConfigVehicleFormComponent,
    TeamIndexComponent,
    TeamFormComponent,
    FaqIndexComponent,
    FaqFormComponent,
    SupportComponent
  ]
})
export class AdminModule { }
