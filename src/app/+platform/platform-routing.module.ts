import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IsUserGuard } from '../core'

import { PlatformComponent } from './platform.component'
import { BonusComponent } from './bonus/bonus.component'
import { InvitedComponent } from './bonus/invited/invited.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProfileComponent } from './profile/profile.component'
import { RequestFreightComponent } from './freight/request-freight/request-freight.component'
import { ProvideFreightComponent } from './freight/provide-freight/provide-freight.component'

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
      path: 'pedir-frete',
      component: RequestFreightComponent,
      data: { name: 'Pedir Frete' }
    },
    {
      path: 'fazer-frete',
      component: ProvideFreightComponent,
      data: { name: 'Fazer Frete' }
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
    },
    {
      path: 'carteira',
      loadChildren: './+wallet/wallet.module#WalletModule'
    },
    {
      path: 'agenda',
      loadChildren: './+schedule/schedule.module#ScheduleModule'
    }
  ]
}]

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
})
export class PlatformRoutingModule { }
