import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { CPF_MASK, CEP_MASK, CREDICARD_MASK, CVV_MASK, EXPIRATION_MASK } from '../../../core/utils'
import { isValidCPF } from '../../../core/validators'
import { PaymentAccountsApiService } from '../../../core/providers'
@Component( {
  templateUrl: './payment-edit.component.html',
  styleUrls: [ './payment-edit.component.css' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class WalletPaymentEditComponent implements OnInit {

  private form: FormGroup
  public cpfMask = CPF_MASK
  public cepMask = CEP_MASK
  public cardMask = CREDICARD_MASK
  public cvvMask = CVV_MASK
  public expMask = EXPIRATION_MASK

  /**
   * Creates an instance of WalletPaymentEditComponent.
   * @param {FormBuilder} formBuilder
   * @param {PaymentAccountsService} paymentsService
   *
   * @memberOf WalletPaymentEditComponent
   */
  public constructor ( private formBuilder: FormBuilder, private paymentsService: PaymentAccountsApiService ) { }

  /**
   *
   *
   *
   * @memberOf WalletPaymentEditComponent
   */
  public ngOnInit () {
    this.form = this.formBuilder.group( {
      title: [ '', Validators.required ],
      cardNumber: [ '', Validators.required ],
      expirationDate: [ '', [ Validators.required ] ],
      cvv: [ '', Validators.required ],
      accountOwner: [ '', Validators.required ],
      accountOwnerCpf: [ '', [ Validators.required, isValidCPF ] ],
      zipcode: [ '' ]
    })
  }

  /**
   *
   *
   * @param {any} data
   *
   * @memberOf WalletPaymentEditComponent
   */
  public submitForm ( data ) {
    if ( !this.form.valid ) {
      return
    }
    this.paymentsService.save( data )
      .toPromise()
      .then(() => {
        swal( 'Cadastro relizado', `O cadastro foi realizado com sucesso.`, 'success' )
        this.form.reset()
      })
      .catch( error => swal( 'Erro', `Ocorreu algum erro ao salvar. Erro ${ error }`, 'error' ) )
  }
}
