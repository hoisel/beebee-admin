import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../core'

@Component( {
  templateUrl: './bonus.component.html',
  styleUrls: [ './bonus.component.css' ]
})
export class BonusComponent implements OnInit {

  public codigoIndicacao: string

  /**
   * Creates an instance of BonusComponent.
   * @param {UserService} user
   *
   * @memberOf BonusComponent
   */
  constructor( private auth: AuthService ) {
    this.codigoIndicacao = this.auth.user.id
  }

  /**
   *
   *
   *
   * @memberOf BonusComponent
   */
  ngOnInit() {
  }
}
