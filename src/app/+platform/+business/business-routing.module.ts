import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IsUserGuard, IsCompanyProfileGuard } from '../../core'

import { BusinessComponent } from './business.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { UserListComponent } from './user/user-list/user-list.component'
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component'
import { VehicleEditComponent } from './vehicle/vehicle-edit/vehicle-edit.component'
import { UserEditComponent } from './user/user-edit/user-edit.component'
import { DriverListComponent } from './driver/driver-list/driver-list.component'
import { DriverEditComponent } from './driver/driver-edit/driver-edit.component'
import { CompanyEditComponent } from './company/company-edit/company-edit.component'
import { CompanyRegisterComponent } from './company/company-register/company-register.component'
import { ProfileSwitcherComponent } from './profile-switcher/profile-switcher.component'
import { RequestFreightComponent } from './freight/request-freight/request-freight.component'
import { ProvideFreightComponent } from './freight/provide-freight/provide-freight.component'

const routes: Routes = [ {
  path: '',
  component: BusinessComponent,
  canLoad: [ IsUserGuard ],
  canActivate: [ IsUserGuard ],
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'gerenciador',
      component: ProfileSwitcherComponent,
      data: { title: 'Meu Negócio | Seleção de Perfil' }
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
      path: 'dashboard',
      component: DashboardComponent,
      data: { title: 'Meu Negócio | Dashboard' }
    },
    {
      path: 'perfil',
      component: CompanyEditComponent,
      data: { title: 'Meu Negócio | Perfil' }
    },
    {
      path: 'novo',
      component: CompanyRegisterComponent,
      data: { title: 'Meu Negócio | Novo' }
    },
    {
      path: 'usuarios',
      canActivate: [ IsCompanyProfileGuard ],
      component: UserListComponent,
      data: { title: 'Meu Negócio | Usuários' }
    },
    {
      path: 'usuarios/editar/:id',
      canActivate: [ IsCompanyProfileGuard ],
      component: UserEditComponent,
      data: { title: 'Meu Negócio | Editar Usuário' }
    },
    {
      path: 'usuarios/novo',
      canActivate: [ IsCompanyProfileGuard ],
      component: UserEditComponent,
      data: { title: 'Meu Negócio | Novo Usuário' }
    },
    {
      path: 'motoristas',
      canActivate: [ IsCompanyProfileGuard ],
      component: DriverListComponent,
      data: { title: 'Meu Negócio | Motoristas' }
    },
    {
      path: 'motoristas/editar/:id',
      canActivate: [ IsCompanyProfileGuard ],
      component: DriverEditComponent,
      data: { title: 'Meu Negócio | Editar Motorista' }
    },
    {
      path: 'motoristas/novo',
      canActivate: [ IsCompanyProfileGuard ],
      component: DriverEditComponent,
      data: { title: 'Meu Negócio | Novo Motorista' }
    },
    {
      path: 'veiculos',
      canActivate: [ IsCompanyProfileGuard ],
      component: VehicleListComponent,
      data: { title: 'Meu Negócio | Veículos' }
    },
    {
      path: 'veiculos/editar/:id',
      canActivate: [ IsCompanyProfileGuard ],
      component: VehicleEditComponent,
      data: { title: 'Meu Negócio | Editar Veículo' }
    },
    {
      path: 'veiculos/novo',
      canActivate: [ IsCompanyProfileGuard ],
      component: VehicleEditComponent,
      data: { title: 'Meu Negócio | ovo Veículo' }
    }
  ]
}]

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
  providers: []
})
export class BusinessRoutingModule { }
