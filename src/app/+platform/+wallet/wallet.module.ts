import { NgModule } from '@angular/core'
import { WalletRoutingModule } from './wallet-routing.module'

import { SharedModule } from '../../shared'
import { WalletComponent } from './wallet.component'
import { WalletSummaryComponent } from './wallet-summary/wallet-summary.component'
import { WalletPaymentListComponent } from './wallet-payment-list/wallet-payment-list.component'
import { WalletPaymentEditComponent } from './wallet-payment-edit/wallet-payment-edit.component'
import { WalletReceiptEditComponent } from './wallet-receipt-edit/wallet-receipt-edit.component'
import { WalletReceiptListComponent } from './wallet-receipt-list/wallet-receipt-list.component'

@NgModule( {
  imports: [
    WalletRoutingModule,
    SharedModule
  ],
  declarations: [
    WalletComponent,
    WalletSummaryComponent,
    WalletPaymentListComponent,
    WalletPaymentEditComponent,
    WalletReceiptEditComponent,
    WalletReceiptListComponent
  ]
})
export class WalletModule { }
