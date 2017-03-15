import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { CPF_MASK, PHONE_MASK, CELL_PHONE_MASK, isValidCPF, DriverApiService } from '../../../../core'

@Component( {
  templateUrl: './driver-edit.component.html',
  styleUrls: [ './driver-edit.component.css' ]
})
export class DriverEditComponent implements OnInit {

  private form: FormGroup
  public cpfMask = CPF_MASK
  public phoneMask = PHONE_MASK
  public cellPhoneMask = CELL_PHONE_MASK

  /**
   * Creates an instance of DriverEditComponent.
   * @param {FormBuilder} formBuilder
   * @param {DriverService} driver
   *
   * @memberOf DriverEditComponent
   */
  constructor( private formBuilder: FormBuilder, private driver: DriverApiService ) { }

  /**
   *
   *
   *
   * @memberOf DriverEditComponent
   */
  public ngOnInit(): void {
    this.form = this.formBuilder.group( {
      cpf: [ '', [ Validators.required, isValidCPF ] ],
      name: [ '' ],
      cellphone: [ '' ]
    })
  }

  /**
   *
   *
   * @param {*} data
   *
   * @memberOf DriverEditComponent
   */
  public submitForm( driver: any ): void {
    if ( !this.form.valid ) {
      return
    }
    this.driver.save( driver )
      .toPromise()
      .then( resp => {
        swal(
          'Cadastro relizado',
          `O cadastro foi realizado com sucesso.`,
          'success'
        )
        this.clearForm()
      })
      .catch( err => {
        if ( err.status === 404 ) {
          swal(
            'Não cadastrado',
            'O CPF informado não está cadastrado em nossa base de dados. '
            + 'Solicite ao usuário que efetue o cadastro e tente novamente.',
            'info'
          )

          return
        }
        swal(
          'Erro',
          `Ocorreu algum erro ao salvar. Erro ${ err }`,
          'error'
        )
        console.error( err )
      })
  }

  /**
   *
   *
   *
   * @memberOf DriverEditComponent
   */
  public clearForm(): void {
    this.form.reset( {
      cpf: ''
    })
  }
}
