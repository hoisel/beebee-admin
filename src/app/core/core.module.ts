/* tslint:disable:member-ordering no-unused-variable */
import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

// services
import { LoggedInGuard } from './guards'
import { NStorage } from './store'
import { httpProvider } from './auth/http.provider'
import {
  AuthService,
  ProgressService,
  ThemeService,
  UiStateStoreService
} from './providers'

@NgModule( {
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  providers: [
    NStorage,
    httpProvider,
    ProgressService,
    LoggedInGuard,
    ThemeService,
    UiStateStoreService,
    AuthService
  ],
  exports: [
    RouterModule
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
