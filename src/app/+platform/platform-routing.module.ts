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
      data: { title: 'Dashboard' }
    },
    {
      path: 'minha-conta',
      component: ProfileComponent,
      data: { title: 'Minha Conta' }
    },
    {
      path: 'pedir-frete',
      component: RequestFreightComponent,
      data: { title: 'Pedir Frete' }
    },
    {
      path: 'fazer-frete',
      component: ProvideFreightComponent,
      data: { title: 'Fazer Frete' }
    },
    {
      path: 'fidelidade',
      component: BonusComponent,
      data: { title: 'Fidelidade' }
    },
    {
      path: 'fidelidade/indicados',
      component: InvitedComponent,
      data: { title: 'Indicados' }
    },
    {
      path: 'carteira',
      loadChildren: './+wallet/wallet.module#WalletModule'
    },
    {
      path: 'agenda',
      loadChildren: './+schedule/schedule.module#ScheduleModule'
    },
    {
      path: 'suporte',
      loadChildren: './+support/support.module#SupportModule'
    },
    {
      path: 'negocios',
      loadChildren: './+business/business.module#BusinessModule'
    }
  ]
}]

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
})
export class PlatformRoutingModule { }
