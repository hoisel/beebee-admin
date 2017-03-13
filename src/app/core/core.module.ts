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
  IsAdminGuard,
  IsSuperAdminGuard,
  IsUserGuard
} from './auth'

import {
  ProgressService,
  ThemeService,
  UiStateStoreService,
  UsersService,
  PaymentAccountsService,
  ReceiptAccountsService
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
    IsAdminGuard,
    IsUserGuard,
    IsSuperAdminGuard,
    ThemeService,
    UiStateStoreService,
    AuthService,
    StorageService,
    UsersService,
    PaymentAccountsService,
    ReceiptAccountsService
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
