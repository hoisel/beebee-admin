/* tslint:disable:member-ordering no-unused-variable */
import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http'

// modules
import { ThemeModule } from './theme/theme.module'

// components
import { E403Component, E404Component } from './errors'

// import { DashboardComponent } from './dashboard/dashboard.component'
// import { OrderIndexComponent } from './order/index.component'
// import { OrderDetailsComponent } from './order/details.component'
// import { UserIndexComponent } from './user/index.component'
// import { UserFormComponent } from './user/form.component'
// import { DriverIndexComponent } from './driver/index.component'
// import { DriverFormComponent } from './driver/form.component'
// import { BusinessIndexComponent } from './business/index.component'
// import { BusinessFormComponent } from './business/form.component'
// import { VehicleIndexComponent } from './vehicle/index.component'
// import { VehicleFormComponent } from './vehicle/form.component'
// import { ConfigOrderComponent } from './config/order/order.component'
// import { ConfigBonusComponent } from './config/bonus/bonus.component'
// import { ConfigVehicleIndexComponent } from './config/vehicle/index.component'
// import { ConfigVehicleFormComponent } from './config/vehicle/form.component'
// import { ConfigExtraIndexComponent } from './config/extra/index.component'
// import { ConfigExtraFormComponent } from './config/extra/form.component'
// import { ConfigObjectIndexComponent } from './config/object/index.component'
// import { ConfigObjectFormComponent } from './config/object/form.component'
// import { TeamIndexComponent } from './team/index.component'
// import { TeamFormComponent } from './team/form.component'
// import { FaqIndexComponent } from './faq/index.component'
// import { FaqFormComponent } from './faq/form.component'
// import { SupportComponent } from './support/support.component'

// services
import { AuthService, UserService, ProgressService, SharedDataService } from './providers'
import { LoggedInGuard } from './guards'

@NgModule( {
  imports: [
    CommonModule,
    HttpModule,
    ThemeModule
  ],
  declarations: [
    E403Component,
    E404Component
  ],
  providers: [
    AuthService,
    UserService,
    ProgressService,
    SharedDataService,
    LoggedInGuard
  ],
  exports: [
    CommonModule,
    E403Component,
    E404Component,
    ThemeModule
  ]
} )
export class CoreModule {

  /**
   * Creates an instance of CoreModule.
   * @param {CoreModule} parentModule
   *
   * @memberOf CoreModule
   */
  constructor ( @Optional() @SkipSelf() parentModule: CoreModule ) {
    if ( parentModule ) {
      throw new Error( 'CoreModule is already loaded. Import it in the AppModule only' )
    }
  }
}
