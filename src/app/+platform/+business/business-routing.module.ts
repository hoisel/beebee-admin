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
      component: ProfileSwitcherComponent
    },

    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'perfil',
      component: CompanyEditComponent,
      data: { name: 'Perfil de Negócios' }
    },
    {
      path: 'novo',
      component: CompanyRegisterComponent,
      data: { name: 'Cadastro de Novo Negócio' }
    },
    {
      path: 'usuarios',
      canActivate: [ IsCompanyProfileGuard ],
      component: UserListComponent
    },
    {
      path: 'usuarios/editar/:id',
      canActivate: [ IsCompanyProfileGuard ],
      component: UserEditComponent
    },
    {
      path: 'usuarios/novo',
      canActivate: [ IsCompanyProfileGuard ],
      component: UserEditComponent
    },
    {
      path: 'motoristas',
      canActivate: [ IsCompanyProfileGuard ],
      component: DriverListComponent
    },
    {
      path: 'motoristas/editar/:id',
      canActivate: [ IsCompanyProfileGuard ],
      component: DriverEditComponent
    },
    {
      path: 'motoristas/novo',
      canActivate: [ IsCompanyProfileGuard ],
      component: DriverEditComponent
    },
    {
      path: 'veiculos',
      canActivate: [ IsCompanyProfileGuard ],
      component: VehicleListComponent
    },
    {
      path: 'veiculos/editar/:id',
      canActivate: [ IsCompanyProfileGuard ],
      component: VehicleEditComponent
    },
    {
      path: 'veiculos/novo',
      canActivate: [ IsCompanyProfileGuard ],
      component: VehicleEditComponent
    }
  ]
}]

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
  providers: []
})
export class BusinessRoutingModule { }