import { Component, OnInit } from '@angular/core'

import { AuthService, UsersService, User, Company, CompanyProfile, PersonalProfile } from '../../../core'

@Component( {
  templateUrl: './profile-switcher.component.html',
  styleUrls: [ './profile-switcher.component.css' ]
})
export class ProfileSwitcherComponent implements OnInit {

  public companies: any[]
  public cpf: string

  /**
   * Creates an instance of ProfileSwitcherComponent.
   * @param {AuthService} auth
   * @param {UsersService} userService
   *
   * @memberOf ProfileSwitcherComponent
   */
  constructor( private auth: AuthService, private userService: UsersService ) { }

  /**
   *
   *
   *
   * @memberOf ProfileSwitchComponent
   */
  public ngOnInit() {
    this.userService.get( this.auth.user.id )
      .subscribe(( user: User ) => {
        this.companies = user.companies
        this.cpf = user.cpf
      })
  }

  /**
   *
   *
   * @param {any} company
   *
   * @memberOf ProfileSwitchComponent
   */
  public switchProfile( company?: Company ) {
    this.auth.userProfile = company
      ? new CompanyProfile( company.id, company.tradingName )
      : new PersonalProfile( this.auth.user.id, this.auth.user.name )
  }
}
