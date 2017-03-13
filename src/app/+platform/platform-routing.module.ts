import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IsUserGuard } from '../core'

import { PlatformComponent } from './platform.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { OrderIndexComponent } from './order/index.component'
import { OrderDetailsComponent } from './order/details.component'
import { UserIndexComponent } from './user/index.component'
import { UserFormComponent } from './user/form.component'
import { DriverIndexComponent } from './driver/index.component'
import { DriverFormComponent } from './driver/form.component'
import { BusinessIndexComponent } from './business/index.component'
import { BusinessFormComponent } from './business/form.component'
import { VehicleIndexComponent } from './vehicle/index.component'
import { VehicleFormComponent } from './vehicle/form.component'
import { ConfigOrderComponent } from './config/order/order.component'
import { ConfigBonusComponent } from './config/bonus/bonus.component'
import { ConfigVehicleIndexComponent } from './config/vehicle/index.component'
import { ConfigVehicleFormComponent } from './config/vehicle/form.component'
import { ConfigExtraIndexComponent } from './config/extra/index.component'
import { ConfigExtraFormComponent } from './config/extra/form.component'
import { ConfigObjectIndexComponent } from './config/object/index.component'
import { ConfigObjectFormComponent } from './config/object/form.component'
import { TeamIndexComponent } from './team/index.component'
import { TeamFormComponent } from './team/form.component'
import { FaqIndexComponent } from './faq/index.component'
import { FaqFormComponent } from './faq/form.component'
import { SupportComponent } from './support/support.component'

export const routes: Routes = [
  {
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
        component: DashboardComponent
      },
      {
        path: 'pedidos',
        component: OrderIndexComponent
      },
      {
        path: 'pedidos/id',
        component: OrderDetailsComponent
      },
      {
        path: 'usuarios',
        component: UserIndexComponent
      },
      {
        path: 'usuarios/id',
        component: UserFormComponent
      },
      {
        path: 'motoristas',
        component: DriverIndexComponent
      },
      {
        path: 'motoristas/id',
        component: DriverFormComponent
      },
      {
        path: 'empresas',
        component: BusinessIndexComponent
      },
      {
        path: 'empresas/id',
        component: BusinessFormComponent
      },
      {
        path: 'veiculos',
        component: VehicleIndexComponent
      },
      {
        path: 'veiculos/id',
        component: VehicleFormComponent
      },
      {
        path: 'configuracoes/fretes',
        component: ConfigOrderComponent
      },
      {
        path: 'configuracoes/fidelidade',
        component: ConfigBonusComponent
      },
      {
        path: 'configuracoes/veiculos',
        component: ConfigVehicleIndexComponent
      },
      {
        path: 'configuracoes/veiculos/id',
        component: ConfigVehicleFormComponent
      },
      {
        path: 'configuracoes/adicionais',
        component: ConfigExtraIndexComponent
      },
      {
        path: 'configuracoes/adicionais/id',
        component: ConfigExtraFormComponent
      }, {
        path: 'configuracoes/objetos',
        component: ConfigObjectIndexComponent
      },
      {
        path: 'configuracoes/objetos/id',
        component: ConfigObjectFormComponent
      },
      {
        path: 'equipe',
        component: TeamIndexComponent
      },
      {
        path: 'equipe/id',
        component: TeamFormComponent
      },
      {
        path: 'equipe/novo',
        component: TeamFormComponent
      },
      {
        path: 'faq',
        component: FaqIndexComponent
      },
      {
        path: 'faq/novo',
        component: FaqFormComponent
      },
      {
        path: 'suporte',
        component: SupportComponent
      }
    ]
  }
]

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class PlatformRoutingModule { }
