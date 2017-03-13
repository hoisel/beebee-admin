import { NgModule } from '@angular/core'
import { WalletRoutingModule } from './wallet-routing.module'

import { SharedModule } from '../../shared'
import { WalletComponent } from './wallet.component'
import { SummaryComponent } from './summary/summary.component'
import { PaymentListComponent } from './payment-list/payment-list.component'
import { WalletPaymentEditComponent } from './payment-edit/payment-edit.component'
import { ReceiptEditComponent } from './receipt-edit/receipt-edit.component'
import { ReceiptListComponent } from './receipt-list/receipt-list.component'

@NgModule( {
  imports: [
    WalletRoutingModule,
    SharedModule
  ],
  declarations: [
    WalletComponent,
    SummaryComponent,
    PaymentListComponent,
    WalletPaymentEditComponent,
    ReceiptEditComponent,
    ReceiptListComponent
  ]
})
export class WalletModule { }
