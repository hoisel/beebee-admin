import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CepService, Address } from '../../../../core'

import {
  STATES,
  CNPJ_MASK,
  CEP_MASK,
  PHONE_MASK,
  CELL_PHONE_MASK,
  isValidCNPJ,
  isValidEmail,
  Company
} from '../../../../core'

@Component( {
  selector: 'bee-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: [ './company-form.component.css' ]
})
export class CompanyFormComponent implements OnInit, OnChanges {

  @Input() public company: Company
  @Output() public onSubmit = new EventEmitter<Company>()

  private form: FormGroup
  public states = STATES
  public cnpjMask = CNPJ_MASK
  public cepMask = CEP_MASK
  public phoneMask = PHONE_MASK
  public cellMask = CELL_PHONE_MASK

  /**
   * Creates an instance of ProfileFormComponent.
   * @param {FormBuilder} formBuilder
   * @param {BusinessService} business
   * @param {UserService} user
   *
   * @memberOf ProfileFormComponent
   */
  constructor( private formBuilder: FormBuilder, private cepService: CepService ) {
    this.createForm()
  }

  /**
   *
   *
   *
   * @memberOf ProfileFormComponent
   */
  public ngOnInit() {

  }

  /**
   *
   *
   *
   * @memberOf ProfileFormComponent
   */
  public ngOnChanges() {
    if ( this.company ) {
      this.form.reset( this.company )
    }
  }

  /**
   *
   *
   * @param {*} data
   *
   * @memberOf ProfileFormComponent
   */
  public submitForm( company: Company ) {
    if ( !this.form.valid ) {
      return
    }
    this.onSubmit.emit( company )
  }

  /**
   * Obtém o endereço através do CEP informado.
   */
  public getAddress() {
    let zipcode = this.form.get( 'zipcode' ).value
    if ( zipcode ) {
      this.cepService.getAddress( zipcode ).subscribe(( address: Address ) => this.form.patchValue( address ) )
    }
  }

  /**
   *
   *
   * @private
   *
   * @memberOf ProfileFormComponent
   */
  private createForm(): void {
    this.form = this.formBuilder.group( {
      id: [ '' ],
      tradingName: [ '', [ Validators.required, Validators.minLength( 5 ) ] ],
      companyName: [ '', Validators.required ],
      cnpj: [ '', [ Validators.required, isValidCNPJ ] ],
      requestFreights: [ false ],
      makeFreights: [ false ],
      email: [ '', [ Validators.required, isValidEmail ] ],
      cellphone: [ '' ],
      phone: [ '', Validators.required ],
      address: [ '', Validators.required ],
      zipcode: [ '', Validators.required ],
      number: [ '', Validators.required ],
      district: [ '', Validators.required ],
      city: [ '', Validators.required ],
      state: [ '', Validators.required ],
      complement: [ '' ]
    })
  }
}
