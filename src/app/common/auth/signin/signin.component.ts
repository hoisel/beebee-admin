import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService, CPF_MASK } from '../../../core'

@Component( {
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: [ './signin.component.css' ]
})
export class SigninComponent implements OnInit, OnDestroy {

  public CPF_MASK = CPF_MASK
  public cpf: string
  public password: string
  public message: string = ''
  public loading: boolean = false

  /**
   * Creates an instance of SigninComponent.
   * @param {Router} router
   * @param {AuthService} auth
   *
   * @memberOf SigninComponent
   */
  constructor ( private router: Router, private auth: AuthService ) { }

  /**
   *
   *
   *
   * @memberOf SigninComponent
   */
  ngOnInit (): void {
    if ( this.auth.isAuthenticated ) {
      this.router.navigate( [ 'plataforma' ] )
      return
    }
  }

  /**
   *
   *
   * @param {Event} e
   *
   * @memberOf SigninComponent
   */
  login ( credentials: { cpf: string, password: string } ): void {
    this.loading = true
    this.auth.login( credentials )
      .subscribe( {
        next: () => {
          this.router.navigate( this.auth.redirectLogin )
        },
        error: ( error: any ) => {
          if ( error.status === 401 ) {
            this.message = 'Usuário ou senha inválidos!'
          }
        },
        complete: () => this.loading = false
      })
  }

  ngOnDestroy (): void { }

}
