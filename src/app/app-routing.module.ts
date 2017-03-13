import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IsUserGuard, IsAdminGuard } from './core'

import {
  E403Component,
  E404Component
} from './common/errors'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'acesso/entrar',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    canLoad: [ IsAdminGuard ],
    loadChildren: './+admin/admin.module#AdminModule'
  },
  {
    path: 'plataforma',
    canLoad: [ IsUserGuard ],
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
