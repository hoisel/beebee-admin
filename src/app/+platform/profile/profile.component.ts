import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { isValidEmail, DATE_MASK, CELL_PHONE_MASK, STATES, AuthService, UsersService, User, pick } from '../../core'

@Component( {
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.css' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
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
  constructor( private formBuilder: FormBuilder,
    // private progress: ProgressService,
    private auth: AuthService,
    private usersService: UsersService ) { }

  /**
   *
   *
   *
   * @memberOf ProfileComponent
   */
  public ngOnInit() {
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
  public fileChange( event, type ) {
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
  private getImages() {
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
  public submitForm( data: any ) {
    if ( !this.form.valid ) {
      return
    }
    // Converter a data para YYYY-MM-DD
    data.driverLicenceExpiration = this.convertDateToSql( data.driverLicenceExpiration )
    // this.progress.start()
    this.usersService.save( data )
      .toPromise()
      .then( resp => {
        // this.progress.finish()
        swal(
          'Atualizado',
          'Seus dados forão atualizados com sucesso.',
          'success'
        )
      })
      .catch( err => {
        // this.progress.finish()
        swal(
          'Erro',
          `Ocorreu algum erro ao salvar. Erro ${ err }`,
          'error'
        )
        console.error( err )
      })
  }

  /**
   * Converte a data para YYYY-MM-DD
   */
  convertDateToSql( date: string ) {
    let dateParts = date.split( '/' )
    return `${ dateParts[ 0 ] }-${ dateParts[ 1 ] }-${ dateParts[ 2 ] }`
  }

  // TODO: solicitar senha ao fazer alguma alterção.
  updatePassword( data ): void {
    //
  }

  public getUrlStyle( url: string ) {

    // sanitize the style expression
    return `url(${ url })`
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
      driverLicence: [ '' ],
      driverLicenceExpiration: [ '' ]
    })
  }

  /**
   * Obtém os dados do usuário e preenche o form.
   */
  private fillForm(): void {
    this.usersService.get( this.auth.user.id ).subscribe(( user: User ) => {
      this.form.setValue( pick( user, [ 'id', 'name', 'cpf', 'rg', 'email', 'cellphone', 'phone', 'driverLicence', 'driverLicenceExpiration' ] ) )
      this.form.get( 'cpf' ).disable()
    })
  }
}
