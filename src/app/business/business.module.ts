import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TextMaskModule } from 'angular2-text-mask'

import { ThemeModule } from '../theme/theme.module'
import { BusinessComponent } from './business.component'
import { HeadingComponent } from './heading.component';
import { ProfileComponent } from './profile/profile.component'
import { ProfileFormComponent } from './profile/form.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { UserFormComponent } from './user/form.component'
import { UserIndexComponent } from './user/index.component'
import { DriverFormComponent } from './driver/form.component'
import { DriverIndexComponent } from './driver/index.component'
import { VehicleFormComponent } from './vehicle/form.component'
import { VehicleIndexComponent } from './vehicle/index.component';
import { ManagerIndexComponent } from './manager/index.component';
import { ManagerFormComponent } from './manager/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TextMaskModule,
    ThemeModule
  ],
  declarations: [
    BusinessComponent,
    HeadingComponent,
    ManagerIndexComponent,
    ManagerFormComponent,
    DashboardComponent,
    ProfileComponent,
    ProfileFormComponent,
    UserFormComponent,
    UserIndexComponent,
    DriverFormComponent,
    DriverIndexComponent,
    VehicleFormComponent,
    VehicleIndexComponent
  ]
})
export class BusinessModule { }
