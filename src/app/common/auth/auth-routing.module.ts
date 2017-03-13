import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AuthComponent } from './auth.component'
import { SigninComponent } from './signin/signin.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { NewPasswordLinkComponent } from './new-password-link/new-password-link.component'
import { NewPasswordChangeComponent } from './new-password-change/new-password-change.component'
import { NewPasswordOkComponent } from './new-password-ok/new-password-ok.component'

const routes: Routes = [
  {
    path: 'acesso',
    component: AuthComponent,
    children: [
      {
        path: 'entrar',
        component: SigninComponent
      },
      {
        path: 'esqueci-minha-senha',
        component: ForgotPasswordComponent
      },
      {
        path: 'link-enviado',
        component: NewPasswordLinkComponent
      },
      {
        path: 'nova-senha',
        component: NewPasswordChangeComponent
      },
      {
        path: 'tudo-certo',
        component: NewPasswordOkComponent
      }
    ]
  }]

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class AuthRoutingModule { }
