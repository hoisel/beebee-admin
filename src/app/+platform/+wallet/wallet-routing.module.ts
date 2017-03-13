import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IsUserGuard } from '../../core'
import { WalletComponent } from './wallet.component'
import { WalletSummaryComponent } from './wallet-summary/wallet-summary.component'
import { WalletPaymentListComponent } from './wallet-payment-list/wallet-payment-list.component'
import { WalletPaymentEditComponent } from './wallet-payment-edit/wallet-payment-edit.component'
import { WalletReceiptEditComponent } from './wallet-receipt-edit/wallet-receipt-edit.component'
import { WalletReceiptListComponent } from './wallet-receipt-list/wallet-receipt-list.component'

const routes: Routes = [ {
  path: '',
  component: WalletComponent,
  canLoad: [ IsUserGuard ],
  canActivate: [ IsUserGuard ],
  children: [
    {
      path: '',
      redirectTo: 'resumo'
    },
    {
      path: 'resumo',
      component: WalletSummaryComponent
    },
    {
      path: 'recebimento',
      component: WalletReceiptListComponent,
      data: { name: 'Meios de Recebimento' }
    },
    {
      path: 'recebimento/novo',
      component: WalletReceiptEditComponent,
      data: { name: 'Meios de Recebimento / Novo' }
    },
    {
      path: 'pagamento',
      component: WalletPaymentListComponent, data: { name: 'Meios de Pagamento' }
    },
    {
      path: 'pagamento/novo',
      component: WalletPaymentEditComponent,
      data: { name: 'Meios de Pagamento / Novo' }
    }
  ]
}]

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
})
export class WalletRoutingModule { }
