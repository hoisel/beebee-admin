import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IsUserGuard } from '../../core'

import { BusinessComponent } from './business.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { UserListComponent } from './user/user-list/user-list.component'
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component'
import { UserEditComponent } from './user/user-edit/user-edit.component'
import { VehicleEditComponent } from './vehicle/vehicle-edit/vehicle-edit.component'
import { DriverListComponent } from './driver/driver-list/driver-list.component'
import { DriverEditComponent } from './driver/driver-edit/driver-edit.component'
import { CompanyEditComponent } from './company/company-edit.component'
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
    // {
    //   path: 'novo',
    //   component: ManagerDataComponent
    // },
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
      path: 'usuarios',
      // canActivate: [ HasCompanyGuard ],
      component: UserListComponent
    },
    {
      path: 'usuarios/editar/:id',
      // canActivate: [ HasCompanyGuard ],
      component: UserEditComponent
    },
    {
      path: 'usuarios/novo',
      // canActivate: [ HasCompanyGuard ],
      component: UserEditComponent
    },
    {
      path: 'motoristas',
      // canActivate: [ HasCompanyGuard ],
      component: DriverListComponent
    },
    {
      path: 'motoristas/editar/:id',
      // canActivate: [ HasCompanyGuard ],
      component: DriverEditComponent
    },
    {
      path: 'motoristas/novo',
      // canActivate: [ HasCompanyGuard ],
      component: DriverEditComponent
    },
    {
      path: 'veiculos',
      // canActivate: [ HasCompanyGuard ],
      component: VehicleListComponent
    },
    {
      path: 'veiculos/editar/:id',
      // canActivate: [ HasCompanyGuard ],
      component: VehicleEditComponent
    },
    {
      path: 'veiculos/novo',
      // canActivate: [ HasCompanyGuard ],
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
