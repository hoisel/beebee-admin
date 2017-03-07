import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { LoginComponent } from './login.component'
import { SigninComponent } from './signin/signin.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { NewPasswordLinkComponent } from './new-password-link/new-password-link.component'
import { NewPasswordChangeComponent } from './new-password-change/new-password-change.component'
import { NewPasswordOkComponent } from './new-password-ok/new-password-ok.component'

@NgModule( {
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    SigninComponent,
    ForgotPasswordComponent,
    NewPasswordLinkComponent,
    NewPasswordChangeComponent,
    NewPasswordOkComponent
  ]
} )
export class LoginModule { }
