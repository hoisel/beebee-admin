/* tslint:disable:member-ordering no-unused-variable */
import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { StorageService } from './storage'

import {
  httpProvider,
  AuthService,
  LoggedInGuard,
  IsAdminGuard,
  IsSuperAdminGuard,
  IsUserGuard
} from './auth'

import {
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
    httpProvider,
    ProgressService,
    LoggedInGuard,
    IsAdminGuard,
    IsUserGuard,
    IsSuperAdminGuard,
    ThemeService,
    UiStateStoreService,
    AuthService,
    StorageService
  ],
  exports: [
    RouterModule
  ]
})
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
