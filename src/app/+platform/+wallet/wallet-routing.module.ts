import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IsUserGuard } from '../../core'
import { WalletComponent } from './wallet.component'
import { SummaryComponent } from './summary/summary.component'
import { PaymentListComponent } from './payment-list/payment-list.component'
import { WalletPaymentEditComponent } from './payment-edit/payment-edit.component'
import { ReceiptEditComponent } from './receipt-edit/receipt-edit.component'
import { ReceiptListComponent } from './receipt-list/receipt-list.component'

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
      component: SummaryComponent
    },
    {
      path: 'recebimento',
      component: ReceiptListComponent,
      data: { name: 'Meios de Recebimento' }
    },
    {
      path: 'recebimento/novo',
      component: ReceiptEditComponent,
      data: { name: 'Meios de Recebimento / Novo' }
    },
    {
      path: 'pagamento',
      component: PaymentListComponent, data: { name: 'Meios de Pagamento' }
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
