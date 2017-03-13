import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'
import { LoggedInGuard } from './logged-in.guard'

@Injectable()
export class IsUserGuard extends LoggedInGuard {

  /**
   * Creates an instance of LoggedInGuard.
   * @param {AuthService} auth
   * @param {Router} router
   *
   * @memberOf LoggedInGuard
   */
  constructor ( auth: AuthService, router: Router ) {
    super( auth, router )
  }
  /**
   *
   *
   * @readonly
   * @private
   *
   * @memberOf IsUserGuard
   */
  protected userHasAccess () {
    return super.userHasAccess() && this.auth.user.role === 'user'
  }
}
