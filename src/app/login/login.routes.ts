import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SigninComponent } from './signin/signin.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { NewPasswordLinkComponent } from './new-password-link/new-password-link.component'
import { NewPasswordChangeComponent } from './new-password-change/new-password-change.component'
import { NewPasswordOkComponent } from './new-password-ok/new-password-ok.component'

export const LOGIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'entrar',
    pathMatch: 'full'
  },
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

export const LOGIN_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forChild( LOGIN_ROUTES )
