import { Injectable } from '@angular/core'
import { Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { AuthService } from '../auth.service'
import { LoggedInGuard } from './logged-in.guard'

@Injectable()
export class IsCompanyProfileGuard extends LoggedInGuard {

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
    return super.userHasAccess() && this.auth.userProfile.isCompanyProfile
  }

  /**
   *
   *
   * @protected
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   *
   * @memberOf IsCompanyProfileGuard
   */
  protected handleCannotActivate ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    this.router.navigate( [ '/plataforma/negocios/dashboard' ] )
  }

  /**
   *
   *
   * @protected
   * @param {Route} route
   *
   * @memberOf LoggedInGuard
   */
  protected handleCannotLoad ( route: Route ) {
    this.router.navigate( [ '/plataforma/negocios/dashboard' ] )
  }
}
