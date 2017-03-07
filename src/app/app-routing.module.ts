import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import {
  E403Component,
  E404Component
} from './core'


import {
  SigninComponent,
  ForgotPasswordComponent,
  NewPasswordLinkComponent,
  NewPasswordChangeComponent,
  NewPasswordOkComponent
} from './login'

export const routes: Routes = [
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
  },
  // {
  //   path: 'client',
  //   loadChildren: './client/client-routing.module#ClientRoutingModule'
  // },
  {
    path: '403',
    component: E403Component
  },
  {
    path: '404',
    component: E404Component
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  }
]

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
