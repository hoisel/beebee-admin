import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TextMaskModule } from 'angular2-text-mask'
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core'

import { AuthService, UserService, ProgressService, SharedDataService } from '../providers'
import { LoggedInGuard } from '../guards'
import { APP_ROUTER_PROVIDERS } from './app.routes'
import { AppComponent } from './app.component'
import { E403Component } from './e403/e403.component'
import { E404Component } from './e404/e404.component'
import { LoginModule } from './login/login.module'
import { ThemeModule } from './theme/theme.module'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
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

@NgModule({
  declarations: [
    AppComponent,
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
    E403Component,
    E404Component,
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
    VehicleIndexComponent,
  ],
  imports: [
    APP_ROUTER_PROVIDERS,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    LoginModule,
    ReactiveFormsModule,
    RouterModule,
    TextMaskModule,
    ThemeModule,
  ],
  providers: [
    AuthService,
    LoggedInGuard,
    ProgressService,
    SharedDataService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
