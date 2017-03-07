/* tslint:disable:member-ordering no-unused-variable */
import {
  NgModule,
  Optional,
  SkipSelf,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http'
// import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

// components
import { E403Component, E404Component } from './errors'

// import {
//   HeaderComponent,
//   SidebarLeftComponent,
//   BreadCrumbComponent,
//   FormWizardComponent,
//   ThemeService
// } from './theme'

// import {
//   SigninComponent,
//   ForgotPasswordComponent,
//   NewPasswordLinkComponent,
//   NewPasswordChangeComponent,
//   NewPasswordOkComponent
// } from './login'

// services
import { LoggedInGuard } from './guards'
import {
  AuthService,
  UserService,
  ProgressService,
  SharedDataService,
  ApiService
} from './providers'

@NgModule( {
  imports: [
    CommonModule,
    HttpModule,
    // RouterModule,
    FormsModule
  ],
  declarations: [
    E403Component,
    E404Component
    // SigninComponent,
    // ForgotPasswordComponent,
    // NewPasswordLinkComponent,
    // NewPasswordChangeComponent,
    // NewPasswordOkComponent

    // SidebarLeftComponent,
    // HeaderComponent,
    // BreadCrumbComponent,
    // FormWizardComponent
  ],
  providers: [
    AuthService,
    UserService,
    ProgressService,
    SharedDataService,
    LoggedInGuard,
    // ThemeService,
    ApiService
  ],
  exports: [
    E403Component,
    E404Component

    // SigninComponent,
    // ForgotPasswordComponent,
    // NewPasswordLinkComponent,
    // NewPasswordChangeComponent,
    // NewPasswordOkComponent

    // SidebarLeftComponent,
    // HeaderComponent,
    // BreadCrumbComponent,
    // FormWizardComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
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
