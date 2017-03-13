import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Title } from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core'

import { AuthService } from '../../../core'

@Component( {
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: [ './confirmation.component.css' ]
})
export class ConfirmationComponent implements OnInit {
  private form: FormGroup
  private userId: string | undefined

  /**
   * Creates an instance of ConfirmationComponent.
   * @param {Title} title
   * @param {StorageService} storage
   * @param {FormBuilder} formBuilder
   * @param {Router} router
   * @param {AuthService} auth
   *
   * @memberOf ConfirmationComponent
   */
  constructor (
    private title: Title,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) { }

  /**
   *
   *
   *
   * @memberOf ConfirmationComponent
   */
  public ngOnInit () {

    this.title.setTitle( 'Confirmação | BeeBee' )

    this.form = this.formBuilder.group( {
      confirmationCode: [ '', [ Validators.required ] ]
    })

    // Capture the session ID if available
    this.userId = this.route.snapshot.queryParams[ 'token' ]

    // if ( !this.userId ) {
    //   this.router.navigate( [ '/cadastro' ] )
    // }
  }

  /**
   *
   *
   * @param {any} code
   *
   * @memberOf ConfirmationComponent
   */
  public submitForm ( confirmationCode: string ) {
    console.log( confirmationCode + '   ' + this.userId )

    // this.signupService.validateConfirmationCode( this.userId, confirmationCode )
    //                 .subscribe( ({ token}) => {
    this.auth.login( this.userId )
    this.router.navigate( [ '/cadastro/comecar' ] )
    //                 } )
  }
}
