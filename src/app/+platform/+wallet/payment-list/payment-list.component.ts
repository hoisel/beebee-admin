import { Component, OnInit } from '@angular/core'

import { PaymentAccountsService } from '../../../core'

@Component( {
  templateUrl: './payment-list.component.html',
  styleUrls: [ './payment-list.component.css' ]
})
export class PaymentListComponent implements OnInit {

  public paymentMethods: any[]

  /**
   * Creates an instance of WalletPaymentListComponent.
   * @param {WalletService} wallet
   *
   * @memberOf WalletPaymentListComponent
   */
  constructor ( private paymentsService: PaymentAccountsService ) { }

  /**
   *
   *
   *
   * @memberOf WalletPaymentListComponent
   */
  public ngOnInit (): void {
    this.paymentsService.getAll().subscribe( paymentMethods => this.paymentMethods = paymentMethods )
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
        this.paymentMethods.splice( $.inArray( payment, this.paymentMethods ), 1 )
        swal( 'Removido', `O meio de pagamento foi removido com sucesso.`, 'success' )
      })
      .catch( error => {
        swal( 'Erro', `Ocorreu algum erro ao efeturar a remoção. Erro ${ error }`, 'error' )
        console.error( error )
      })
  }
}
