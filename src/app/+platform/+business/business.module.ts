import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared'

import { BusinessRoutingModule } from './business-routing.module'
import { BusinessComponent } from './business.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { UserListComponent } from './user/user-list/user-list.component'
import { UserEditComponent } from './user/user-edit/user-edit.component'
import { VehicleEditComponent } from './vehicle/vehicle-edit/vehicle-edit.component'
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component'
import { DriverListComponent } from './driver/driver-list/driver-list.component'
import { DriverEditComponent } from './driver/driver-edit/driver-edit.component'
import { CompanyEditComponent } from './company/company-edit/company-edit.component'
import { CompanyRegisterComponent } from './company/company-register/company-register.component'
import { CompanyFormComponent } from './company/company-form/company-form.component'
import { ProfileSwitcherComponent } from './profile-switcher/profile-switcher.component'
import { RequestFreightComponent } from './freight/request-freight/request-freight.component'
import { ProvideFreightComponent } from './freight/provide-freight/provide-freight.component'

@NgModule( {
  imports: [
    SharedModule,
    BusinessRoutingModule
  ],
  declarations: [
    BusinessComponent,
    DashboardComponent,
    UserListComponent,
    UserEditComponent,
    VehicleListComponent,
    VehicleEditComponent,
    DriverListComponent,
    DriverEditComponent,
    CompanyEditComponent,
    CompanyFormComponent,
    ProfileSwitcherComponent,
    CompanyRegisterComponent,
    RequestFreightComponent,
    ProvideFreightComponent
  ]
})
export class BusinessModule { }
