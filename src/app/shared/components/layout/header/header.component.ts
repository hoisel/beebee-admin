import { Component } from '@angular/core'
import { AuthService } from '../../../../core'
import { Router } from '@angular/router'

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent {

  /**
   * Creates an instance of HeaderComponent
   * @param {AuthService} auth
   *
   * @memberOf HeaderComponent
   */
  constructor ( private auth: AuthService, private router: Router ) { }

  /**
   *
   *
   * @returns {void}
   *
   * @memberOf HeaderComponent
   */
  public logout (): void {
    this.auth.logout().then( logoutDateTime => {
      console.log( `Deslogou em ${ logoutDateTime.toTimeString() }` )
      this.router.navigate( [ '/acesso/entrar' ] )
    })
  }

  // public expired () {
  //   this.auth.expired().subscribe()
  // }

  // public invalid () {
  //   this.auth.invalid().subscribe()
  // }
}
