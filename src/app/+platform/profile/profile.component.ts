import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {
  isValidEmail, DATE_MASK, CELL_PHONE_MASK, STATES, AuthService,
  UsersApiService,
  User,
  UploadInfo
} from '../../core'

// type UserImage = 'avatar' | 'driverLicense'

@Component( {
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.css' ]
})
export class ProfileComponent implements OnInit {
  // Form
  private form: FormGroup
  // Masks
  public states = STATES
  public dateMask = DATE_MASK
  public cellMask = CELL_PHONE_MASK
  public avatar: string
  public driverLicenseImg: string

  /**
   * Creates an instance of ProfileComponent.
   * @param {FormBuilder} formBuilder
   * @param {AuthService} auth
   * @param {UsersApiService} usersApiService
   *
   * @memberOf ProfileComponent
   */
  constructor( private formBuilder: FormBuilder, private auth: AuthService, private usersApiService: UsersApiService ) { }

  /**
   *
   *
   *
   * @memberOf ProfileComponent
   */
  public ngOnInit() {
    this.createForm()
    this.fillForm()
  }

  /**
   *
   *
   * @param {{ imageFile: File, imageName: string, fieldName: string }} uploadInfo
   *
   * @memberOf ProfileComponent
   */
  public onUploaded( uploadInfo: UploadInfo ) {
    const user: User = this.form.value
    user[ uploadInfo.fieldName ] = uploadInfo.imageName
    this.submitForm( user )
  }

  /**
   *
   *
   * @param {*} data
   *
   * @memberOf ProfileComponent
   */
  public submitForm( user: User ) {
    if ( !this.form.valid ) {
      return
    }

    // Converter a data para YYYY-MM-DD
    user.driverLicenseExpiration = this.toDate( user.driverLicenseExpiration )

    this.usersApiService.save( user )
      .subscribe(() => swal( 'Atualizado', 'Seus dados forão atualizados com sucesso.', 'success' ),
      error => swal( 'Erro', `Ocorreu algum erro ao salvar. Erro ${ error.message }`, 'error' ) )
  }

  /**
   *
   *
   * @param {string} [date='']
   * @returns {string}
   *
   * @memberOf ProfileComponent
   */
  private toDate( date: string ): string {
    if ( /^\d{4}-\d{2}-\d{2}$/.test( date ) || !date ) {
      return date
    }
    let [ day, month, year ] = date.split( '/' )
    return `${ year }-${ month }-${ day }`
  }

  /**
   *
   *
   * @private
   *
   * @memberOf ProfileComponent
   */
  private createForm(): void {
    this.form = this.formBuilder.group( {
      id: [ '', Validators.required ],
      name: [ '', [ Validators.required, Validators.minLength( 5 ) ] ],
      cpf: [ '', Validators.required ],
      rg: [ '', Validators.required ],
      email: [ '', [ Validators.required, isValidEmail ] ],
      cellphone: [ '', Validators.required ],
      phone: [ '' ],
      driverLicense: [ '' ],
      driverLicenseExpiration: [ '', Validators.required ]
    })
  }

  /**
   * Obtém os dados do usuário e preenche o form.
   */
  private fillForm(): void {
    this.usersApiService.get( this.auth.user.id ).subscribe(( user: User ) => {
      this.avatar = user.avatar
      this.driverLicenseImg = user.driverLicenseImg
      this.form.patchValue( user )
      this.form.get( 'cpf' ).disable()
    })
  }
}
