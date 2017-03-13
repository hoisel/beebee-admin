import { NgModule } from '@angular/core'

import { AuthRoutingModule } from './auth-routing.module'
import { SharedModule } from '../../shared'

import { SigninComponent } from './signin/signin.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { NewPasswordLinkComponent } from './new-password-link/new-password-link.component'
import { NewPasswordChangeComponent } from './new-password-change/new-password-change.component'
import { NewPasswordOkComponent } from './new-password-ok/new-password-ok.component'
import { AuthComponent } from './auth.component'

@NgModule( {
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [
    AuthComponent,
    SigninComponent,
    ForgotPasswordComponent,
    NewPasswordLinkComponent,
    NewPasswordChangeComponent,
    NewPasswordOkComponent
  ]
} )
export class AuthModule { }
