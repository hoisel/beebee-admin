import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IsUserGuard } from '../core'

import { PlatformComponent } from './platform.component'
import { BonusComponent } from './bonus/bonus.component'
import { InvitedComponent } from './bonus/invited/invited.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [ {
  path: '',
  component: PlatformComponent,
  canLoad: [ IsUserGuard ],
  canActivate: [ IsUserGuard ],
  children: [
    {
      path: '',
      redirectTo: 'dashboard'
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: { name: 'Dashboard' }
    },
    {
      path: 'minha-conta',
      component: ProfileComponent,
      data: { name: 'Minha Conta' }
    },
    {
      path: 'fidelidade',
      component: BonusComponent,
      data: { name: 'Fidelidade' }
    },
    {
      path: 'fidelidade/indicados',
      component: InvitedComponent,
      data: { name: 'Indicados' }
    }
  ]
}]

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
})
export class PlatformRoutingModule { }
