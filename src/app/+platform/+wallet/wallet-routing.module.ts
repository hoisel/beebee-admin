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
      component: SummaryComponent,
      data: { title: 'Carteira' }
    },
    {
      path: 'recebimento',
      component: ReceiptListComponent,
      data: { title: 'Carteira | Meios de Recebimento' }
    },
    {
      path: 'recebimento/novo',
      component: ReceiptEditComponent,
      data: { title: 'Carteira | Novo Meio de Recebimento' }
    },
    {
      path: 'pagamento',
      component: PaymentListComponent,
      data: { title: 'Carteira | Meios de Pagamento' }
    },
    {
      path: 'pagamento/novo',
      component: WalletPaymentEditComponent,
      data: { title: 'Carteira | Novo Meio de Pagamento' }
    }
  ]
}]

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
})
export class WalletRoutingModule { }
