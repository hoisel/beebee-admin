import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ManagerIndexComponent } from './manager/index.component'
import { ManagerFormComponent } from './manager/form.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProfileComponent } from './profile/profile.component'
import { UserFormComponent } from './user/form.component'
import { UserIndexComponent } from './user/index.component'
import { DriverFormComponent } from './driver/form.component'
import { DriverIndexComponent } from './driver/index.component'
import { VehicleFormComponent } from './vehicle/form.component'
import { VehicleIndexComponent } from './vehicle/index.component'

export const BUSINESS_ROUTES: Routes = [
  { path: '', redirectTo: 'gerenciador', pathMatch: 'full' },
  { path: 'gerenciador', component: ManagerIndexComponent },
  { path: 'novo', component: ManagerFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'perfil', component: ProfileComponent, data: {name: 'Perfil de Negócios'} },
  { path: 'usuarios', component: UserIndexComponent },
  { path: 'usuarios/editar/:id', component: UserFormComponent },
  { path: 'usuarios/novo', component: UserFormComponent },
  { path: 'motoristas', component: DriverIndexComponent },
  { path: 'motoristas/editar/:id', component: DriverFormComponent },
  { path: 'motoristas/novo', component: DriverFormComponent },
  { path: 'veiculos', component: VehicleIndexComponent },
  { path: 'veiculos/editar/:id', component: VehicleFormComponent },
  { path: 'veiculos/novo', component: VehicleFormComponent },
]

export const BUSINESS_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forChild(BUSINESS_ROUTES)
