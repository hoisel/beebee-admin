import { Injectable } from '@angular/core'
import { CanActivate, CanLoad, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { AuthService } from '../'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class IsUserGuard implements CanActivate, CanLoad {

  /**
   * Creates an instance of LoggedInGuard.
   * @param {AuthService} auth
   * @param {Router} router
   *
   * @memberOf LoggedInGuard
   */
  constructor ( private auth: AuthService, private router: Router ) { }

  /**
   *
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns
   *
   * @memberOf LoggedInGuard
   */
  public canActivate ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {

    // Store the attempted URL for redirecting
    this.auth.redirectUrl = state.url

    if ( this.userHasAccess ) {
      return true
    }

    this.router.navigate( [ 'acesso/entrar' ] )
    return false
  }

  /**
   *
   *
   * @param {Route} route
   * @returns {(Observable<boolean> | Promise<boolean> | boolean)}
   *
   * @memberOf LoggedInGuard
   */
  public canLoad ( route: Route ): Observable<boolean> | Promise<boolean> | boolean {

    if ( this.userHasAccess ) {
      return true
    }

    this.router.navigate( [ 'acesso/entrar' ] )
    return false
  }

  /**
   *
   *
   * @readonly
   * @private
   *
   * @memberOf IsUserGuard
   */
  private get userHasAccess() {
    return this.auth.isAuthenticated && this.auth.user.role === 'user'
  }
}
