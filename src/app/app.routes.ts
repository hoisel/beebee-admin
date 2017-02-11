import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoggedInGuard } from '../guards'
import { LOGIN_ROUTES } from './login/login.routes'
import { LoginComponent } from './login/login.component'
import { REGISTER_ROUTES } from './register/register.routes'
import { RegisterComponent } from './register/register.component'
import { PLATAFORMA_ROUTES } from './plataforma/plataforma.routes'
import { PlataformaComponent } from './plataforma/plataforma.component'
import { WALLET_ROUTES } from './wallet/wallet.routes'
import { WalletComponent } from './wallet/wallet.component'
import { BonusComponent } from './bonus/bonus.component'
import { BUSINESS_ROUTES } from './business/business.routes'
import { BusinessComponent } from './business/business.component'
import { ProfileComponent } from './profile/profile.component'
import { HelpComponent } from './help/help.component'
import { SupportComponent } from './support/support.component'
import { ADMIN_ROUTES } from './admin/admin.routes'
import { AdminComponent } from './admin/admin.component'
import { E403Component } from './e403/e403.component'
import { E404Component } from './e404/e404.component'

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'acesso',
    pathMatch: 'full'
  },
  {
    path: 'acesso',
    component: LoginComponent,
    children: [...LOGIN_ROUTES]
  },
  {
    path: 'cadastro',
    component: RegisterComponent,
    children: [...REGISTER_ROUTES],
    data: { name: 'Cadastro' }
  },
  {
    path: 'carteira',
    component: WalletComponent,
    children: [...WALLET_ROUTES],
    //canActivate: [LoggedInGuard],
    data: { name: 'Carteira' }
  },
  {
    path: 'fidelidade',
    component: BonusComponent,
    //canActivate: [LoggedInGuard],
    data: { name: 'Fidelidade' }
  },
  {
    path: 'negocios',
    component: BusinessComponent,
    children: [...BUSINESS_ROUTES],
    //canActivate: [LoggedInGuard],
    data: { name: 'Meu Negócio' }
  },
  {
    path: 'plataforma',
    component: PlataformaComponent,
    children: [...PLATAFORMA_ROUTES ],
    //canActivate: [LoggedInGuard]
  },
  {
    path: 'minha-conta',
    component: ProfileComponent,
    //canActivate: [LoggedInGuard],
    data: { name: 'Minha Conta' }
  },
  {
    path: 'ajuda',
    component: HelpComponent,
    //canActivate: [LoggedInGuard],
    data: { name: 'Ajuda' }
  },
  {
    path: 'suporte',
    component: SupportComponent,
    //canActivate: [LoggedInGuard],
    data: { name: 'Suporte' }
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [...ADMIN_ROUTES ],
    // //canActivate: [LoggedInGuard],
    data: { name: 'Administrativo' }
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

export const APP_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES)
