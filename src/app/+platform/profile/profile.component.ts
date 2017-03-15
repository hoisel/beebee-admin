import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { isValidEmail, DATE_MASK, CELL_PHONE_MASK, STATES, AuthService, UsersApiService, User, pick } from '../../core'

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
  public avatarUrl: string = '/assets/beebee/img/profile.png'
  public driverLicenseUrl: string = '/assets/beebee/img/profile.png'
  public file: any

  /**
   * Creates an instance of ProfileComponent.
   * @param {FormBuilder} formBuilder
   * @param {AuthService} auth
   * @param {UsersService} usersService
   *
   * @memberOf ProfileComponent
   */
  constructor (
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private usersService: UsersApiService ) { }

  /**
   *
   *
   *
   * @memberOf ProfileComponent
   */
  public ngOnInit () {
    this.getImages()
    this.createForm()
    this.fillForm()
  }

  /**
   *
   *
   * @param {any} event
   * @param {any} type
   *
   * @memberOf ProfileComponent
   */
  public fileChange ( event, type ) {
    // let fileList: FileList = event.target.files
    // if ( fileList.length > 0 ) {
    //   // this.progress.start()
    //   console.log( 'Entrou...' )
    //   let file: File = fileList[ 0 ]

    //   this.usersService.upload( file, this.auth.user.id, type )
    //     .then( res => {
    //       console.log( res )
    //       this.usersService.getImage( this.auth.user.id, type )
    //         .subscribe( image => {
    //           if ( type === 'avatar' ) {
    //             $( '#avatar' ).css( { 'background-image': 'url("' + image + '")' })
    //           }
    //           if ( type === 'driverLicense' ) {
    //             $( '#driverLicense' ).css( { 'background-image': 'url("' + image + '")' })
    //           }
    //           // this.progress.finish()
    //         })
    //     })
    //     // .catch( err => this.progress.finish() )
    // }
  }

  /**
   *
   *
   * @private
   *
   * @memberOf ProfileComponent
   */
  private getImages () {
    this.usersService.getImage( this.auth.user.id, 'avatar' )
      .subscribe( image => this.avatarUrl = image )

    this.usersService.getImage( this.auth.user.id, 'driverLicense' )
      .subscribe( image => this.driverLicenseUrl = image )
  }

  /**
   *
   *
   * @param {*} data
   *
   * @memberOf ProfileComponent
   */
  public submitForm ( user: User ) {
    if ( !this.form.valid ) {
      return
    }

    // Converter a data para YYYY-MM-DD
    user.driverLicenceExpiration = this.toDate( user.driverLicenceExpiration )

    this.usersService.save( user )
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
  private toDate ( date: string = '' ): string {
    let [ day, month, year ] = date.split( '/' )
    return `${ year }-${ month }-${ day }`
  }

  /**
   *
   *
   * @param {string} url
   * @returns
   *
   * @memberOf ProfileComponent
   */
  public getUrlStyle ( url: string ) {
    return `url(${ url })`
  }

  /**
   *
   *
   * @private
   *
   * @memberOf ProfileComponent
   */
  private createForm (): void {
    this.form = this.formBuilder.group( {
      id: [ '', Validators.required ],
      name: [ '', [ Validators.required, Validators.minLength( 5 ) ] ],
      cpf: [ '', Validators.required ],
      rg: [ '', Validators.required ],
      email: [ '', [ Validators.required, isValidEmail ] ],
      cellphone: [ '', Validators.required ],
      phone: [ '' ],
      driverLicence: [ '' ],
      driverLicenceExpiration: [ '', Validators.required ]
    })
  }

  /**
   * Obtém os dados do usuário e preenche o form.
   */
  private fillForm (): void {
    this.usersService.get( this.auth.user.id ).subscribe(( user: User ) => {
      this.form.setValue( pick( user, [ 'id', 'name', 'cpf', 'rg', 'email', 'cellphone', 'phone', 'driverLicence', 'driverLicenceExpiration' ] ) )
      this.form.get( 'cpf' ).disable()
    })
  }
}
