import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoggedInGuard } from './core'

import {
  E403Component,
  E404Component
} from './errors'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'acesso/entrar',
    pathMatch: 'full'
  },
  {
    path: 'plataforma',
    canLoad: [ LoggedInGuard ],
    loadChildren: './+platform/platform.module#PlatformModule'
  },
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
