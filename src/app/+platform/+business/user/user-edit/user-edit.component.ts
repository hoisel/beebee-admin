import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { CPF_MASK, PHONE_MASK, CELL_PHONE_MASK, isValidCPF, DriverApiService } from '../../../../core'

@Component( {
  templateUrl: './user-edit.component.html',
  styleUrls: [ './user-edit.component.css' ]
})
export class UserEditComponent implements OnInit {

  private form: FormGroup
  public cpfMask = CPF_MASK
  public phoneMask = PHONE_MASK
  public cellPhoneMask = CELL_PHONE_MASK

  /**
   * Creates an instance of UserEditComponent.
   * @param {FormBuilder} formBuilder
   * @param {EmployeeService} employeeService
   *
   * @memberOf UserEditComponent
   */
  constructor ( private formBuilder: FormBuilder, private employeeService: DriverApiService ) { }

  /**
   *
   *
   *
   * @memberOf UserEditComponent
   */
  public ngOnInit (): void {
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
   * @memberOf UserEditComponent
   */
  public submitForm ( employee: any ): void {
    if ( !this.form.valid ) {
      return
    }
    this.employeeService.save( employee )
      .toPromise()
      .then( resp => {
        swal( 'Cadastro relizado', `O cadastro foi realizado com sucesso.`, 'success' )
        this.clearForm()
      })
      .catch( err => {
        if ( err.status === 404 ) {
          swal( 'Não cadastrado', 'O CPF informado não está cadastrado em nossa base de dados. ' + 'Solicite ao usuário que efetue o cadastro e tente novamente.', 'info' )
          return
        }
        swal( 'Erro', `Ocorreu algum erro ao salvar. Erro ${ err }`, 'error' )
      })
  }

  /**
   *
   *
   *
   * @memberOf UserEditComponent
   */
  public clearForm (): void {
    this.form.reset( { cpf: '' })
  }
}
