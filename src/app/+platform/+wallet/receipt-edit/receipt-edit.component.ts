import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { CPF_MASK, STATES } from '../../../core/utils'
import { isValidCPF } from '../../../core/validators'
import { ReceiptAccountsApiService } from '../../../core/providers'

@Component( {
  templateUrl: './receipt-edit.component.html',
  styleUrls: [ './receipt-edit.component.css' ]
})
export class ReceiptEditComponent implements OnInit {

  private form: FormGroup
  public states = STATES
  public cpfMask = CPF_MASK

  /**
   * Creates an instance of WalletReceiptEditComponent.
   * @param {FormBuilder} formBuilder
   * @param {ReceiptAccountsService} receiptsService
   *
   * @memberOf WalletReceiptEditComponent
   */
  public constructor (
    private formBuilder: FormBuilder,
    private receiptsService: ReceiptAccountsApiService
  ) { }

  /**
   *
   *
   *
   * @memberOf WalletReceiptEditComponent
   */
  public ngOnInit () {
    this.form = this.formBuilder.group( {
      title: [ '', Validators.required ],
      bankNumber: [ '', Validators.required ],
      agency: [ '', Validators.required ],
      account: [ '', Validators.required ],
      digit: [ '', Validators.required ],
      accountOwner: [ '', Validators.required ],
      accountOwnerCpf: [ '', [ Validators.required, isValidCPF ] ]
    })
  }

  /**
   *
   *
   * @param {any} data
   *
   * @memberOf WalletReceiptEditComponent
   */
  public submitForm ( data ) {
    if ( !this.form.valid ) {
      return
    }
    this.receiptsService.save( data )
      .toPromise()
      .then( resp => {
        swal( 'Cadastro relizado', `O cadastro foi realizado com sucesso.`, 'success' )
        this.form.reset()
      })
      .catch( err => swal( 'Erro', `Ocorreu algum erro ao salvar. Erro ${ err }`, 'error' ) )
  }
}
