import { Injectable } from '@angular/core'
import { CanActivate, CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { AuthService } from '../providers'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class LoggedInGuard implements CanActivate, CanLoad {

  /**
   * Creates an instance of LoggedInGuard.
   * @param {AuthService} aut
   *
   * @memberOf LoggedInGuard
   */
  constructor ( private auth: AuthService ) { }

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
    return this.auth.isAuthenticated
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
    return this.auth.isAuthenticated
  }
}
