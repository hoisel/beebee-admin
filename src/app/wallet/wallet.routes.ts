import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { WalletSummaryComponent } from './index/summary.component'
import { WalletReceiveIndexComponent } from './index/receive.component'
import { WalletReceiveFormsComponent } from './forms/receive.component'
import { WalletPayIndexComponent } from './index/pay.component'
import { WalletPayFormsComponent } from './forms/pay.component'

export const WALLET_ROUTES: Routes = [
  { path: '',
    redirectTo: 'resumo',
    pathMatch: 'full'
  },
  { path: 'resumo', component: WalletSummaryComponent },
  { path: 'recebimento', component: WalletReceiveIndexComponent, data: { name: 'Meios de Recebimento' } },
  { path: 'recebimento/novo', component: WalletReceiveFormsComponent, data: { name: 'Meios de Recebimento / Novo' } },
  { path: 'pagamento', component: WalletPayIndexComponent, data: { name: 'Meios de Pagamento' } },
  { path: 'pagamento/novo', component: WalletPayFormsComponent, data: { name: 'Meios de Pagamento / Novo' } }
]

export const WALLET_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forChild(WALLET_ROUTES)
