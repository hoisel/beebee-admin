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
    CompanyRegisterComponent
  ]
})
export class BusinessModule { }
