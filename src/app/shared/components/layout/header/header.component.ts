import { Component } from '@angular/core'
import { UserService, AuthService } from '../../../../core'

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
} )
export class HeaderComponent {

  /**
   * Creates an instance of HeaderComponent.
   * @param {UserService} user
   * @param {AuthService} auth
   *
   * @memberOf HeaderComponent
   */
  constructor ( public user: UserService, private auth: AuthService ) { }

  /**
   *
   *
   * @returns {void}
   *
   * @memberOf HeaderComponent
   */
  logout (): void {
    return this.auth.logout()
  }
}
