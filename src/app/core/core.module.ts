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
  IsUserGuard,
  IsCompanyProfileGuard
} from './auth'

import {
  UiStateStoreService,
  UsersApiService,
  PaymentAccountsApiService,
  ReceiptAccountsApiService,
  CompaniesApiService,
  CepService,
  EmplyeeApiService,
  DriverApiService,
  VehiclesApiService,
  CategoriesApiService,
  AssetsApiService
} from './providers'

@NgModule( {
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  providers: [

    // guards
    IsAdminGuard,
    IsUserGuard,
    IsSuperAdminGuard,
    IsCompanyProfileGuard,

    // general services
    httpProvider,
    UiStateStoreService,
    AuthService,
    StorageService,
    CepService,
    AssetsApiService,

    // api services
    UsersApiService,
    PaymentAccountsApiService,
    ReceiptAccountsApiService,
    CompaniesApiService,
    EmplyeeApiService,
    DriverApiService,
    VehiclesApiService,
    CategoriesApiService
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
  constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
    if ( parentModule ) {
      throw new Error( 'CoreModule is already loaded. Import it in the AppModule only' )
    }
  }
}
