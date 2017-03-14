import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs/Subscription'

import { AuthService } from '../../../../core'

@Component( {
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: [ './sidebar-left.component.css' ]
})
export class SidebarLeftComponent implements OnInit, OnDestroy {

  public profileName: string = ''
  private subscription: Subscription

  /**
   * Creates an instance of SidebarLeftComponent.
   * @param {AuthService} auth
   *
   * @memberOf SidebarLeftComponent
   */
  constructor( private auth: AuthService ) { }

  /**
   *
   *
   *
   * @memberOf SidebarLeftComponent
   */
  public ngOnInit() {
    this.subscription = this.auth.userProfile$.subscribe( userProfile => {
      console.log( userProfile )
      this.profileName = userProfile.name
    })
  }

  /**
   *
   *
   *
   * @memberOf SidebarLeftComponent
   */
  public ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  /**
   *
   *
   * @readonly
   * @type {boolean}
   * @memberOf SidebarLeftComponent
   */
  public get isUser(): boolean {
    return this.auth.user.role === 'user'
  }
}
