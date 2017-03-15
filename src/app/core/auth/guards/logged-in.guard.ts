import { Injectable } from '@angular/core'
import { CanActivate, CanLoad, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { AuthService } from '../'
import { Observable } from 'rxjs/Observable'

@Injectable()
export abstract class LoggedInGuard implements CanActivate, CanLoad {

  /**
   * Creates an instance of LoggedInGuard.
   * @param {AuthService} auth
   * @param {Router} router
   *
   * @memberOf LoggedInGuard
   */
  constructor( protected auth: AuthService, protected router: Router ) { }

  /**
   *
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns
   *
   * @memberOf LoggedInGuard
   */
  public canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {

    // Store the attempted URL for redirecting
    this.auth.redirectUrl = state.url

    if ( this.userHasAccess() ) {
      return true
    }

    this.handleCannotActivate( route, state )
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
  public canLoad( route: Route ): Observable<boolean> | Promise<boolean> | boolean {

    if ( this.userHasAccess() ) {
      return true
    }

    this.handleCannotLoad( route )
    return false
  }

  /**
   *
   *
   * @readonly
   * @protected
   * @type {boolean}
   * @memberOf LoggedInGuard
   */
  protected userHasAccess(): boolean {
    return this.auth.isAuthenticated
  }

  /**
   *
   *
   * @protected
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   *
   * @memberOf LoggedInGuard
   */
  protected handleCannotActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    this.router.navigate( [ 'acesso/entrar' ] )
  }

  /**
   *
   *
   * @protected
   * @param {Route} route
   *
   * @memberOf LoggedInGuard
   */
  protected handleCannotLoad( route: Route ) {
    this.router.navigate( [ 'acesso/entrar' ] )
  }
}
