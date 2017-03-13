import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { SignupService, Signup } from '../shared'
import { Token, CPF_MASK, CELL_PHONE_MASK, isValidCPF, isValidEmail, passwordMatcher } from '../../../core'

@Component( {
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.css' ],
  providers: [ SignupService ]
})
export class SignupComponent implements OnInit {
  private form: FormGroup
  public cpfMask = CPF_MASK
  public cellMask = CELL_PHONE_MASK

  /**
   * Creates an instance of SignupComponent.
   * @param {FormBuilder} formBuilder
   * @param {Router} router
   * @param {SignupService} signup
   * @param {StorageService} storage
   *
   * @memberOf SignupComponent
   */
  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
    private signupService: SignupService
  ) { }

  /**
   *
   *
   *
   * @memberOf SignupComponent
   */
  public ngOnInit () {
    this.form = this.formBuilder.group( {
      name: [ '', [ Validators.required, Validators.minLength( 5 ) ] ],
      cpf: [ '', [ Validators.required, isValidCPF ] ],
      email: [ '', [ Validators.required, isValidEmail ] ],
      cellphone: [ '', Validators.required ],
      password: [ '', [ Validators.required, Validators.minLength( 6 ) ] ],
      confirm: [ '', Validators.required ],
      terms: [ false, Validators.pattern( 'true' ) ]
    }, { validator: passwordMatcher })
  }

  /**
   *
   *
   * @param {*} data
   *
   * @memberOf SignupComponent
   */
  public submitForm ( user: Signup ) {
    this.signupService.register( user )
        .subscribe( ({ token }) => this.goToNextStep( token ), error => swal( 'Erro', error, 'error' ) )
  }

  /**
   *
   *
   * @private
   * @param {Signup} user
   * @param {Token} token
   *
   * @memberOf SignupComponent
   */
  private goToNextStep ( token: Token ) {
    this.router.navigate( [ '/cadastro/confirmacao' ], { queryParams: { 'token': token } } )
  }
}
