import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../../../providers'

@Component( {
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: [ './signin.component.css' ]
} )
export class SigninComponent implements OnInit, OnDestroy {

  public cpf: string
  public password: string
  message: string = ''
  loading: boolean = false
  constructor ( private router: Router, private auth: AuthService ) { }

  ngOnInit (): void {
    if ( this.auth.isLoggedIn ) {
      this.router.navigate( [ 'plataforma' ] )
      return
    }
  }

  login ( e: Event ): void {
    e.preventDefault()
    this.loading = true
    this.auth.login( this.cpf, this.password )
      .then(() => this.router.navigate( this.auth.redirectLogin ) )
      .catch( err => {
        this.loading = false
        if ( err.status === 401 ) {
          this.message = 'Usuário ou senha inválido!'
        }
      } )
  }

  ngOnDestroy (): void { }

}
