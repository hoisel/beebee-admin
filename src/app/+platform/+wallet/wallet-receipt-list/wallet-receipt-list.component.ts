import { Component, OnInit } from '@angular/core'

import { ReceiptAccountsService } from '../../../core'

@Component({
  selector: 'app-wallet-receipt-list',
  templateUrl: './wallet-receipt-list.component.html',
  styleUrls: ['./wallet-receipt-list.component.css']
})
export class WalletReceiptListComponent implements OnInit {

  public receiptMethods: any[]

  /**
   * Creates an instance of WalletPaymentListComponent.
   * @param {ReceiptAccountsService} wallet
   *
   * @memberOf WalletPaymentListComponent
   */
  constructor ( private paymentsService: ReceiptAccountsService ) { }

  /**
   *
   *
   *
   * @memberOf WalletPaymentListComponent
   */
  public ngOnInit (): void {
    this.paymentsService.getAll().subscribe( paymentMethods => this.receiptMethods = paymentMethods )
  }

  /**
   *
   *
   * @param {any} payment
   *
   * @memberOf WalletPaymentListComponent
   */
  public delete ( payment ) {
    this.paymentsService.delete( payment )
      .toPromise()
      .then( resp => {
        this.receiptMethods.splice( $.inArray( payment, this.receiptMethods ), 1 )
        swal( 'Removido', `O meio de recebimento foi removido com sucesso.`, 'success' )
      })
      .catch( error => {
        swal( 'Erro', `Ocorreu algum erro ao efeturar a remoção. Erro ${ error }`, 'error' )
        console.error( error )
      })
  }
}
