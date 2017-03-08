import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { AuthService, UserService } from '../providers'
import { UserRole } from '../model'

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor ( private auth: AuthService, private router: Router, private user: UserService ) { }

  canActivate ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    const isLoggedIn = this.auth.isLoggedIn
    let isAllowed: boolean = isLoggedIn
    if ( !isLoggedIn ) {
      this.auth.redirectLogin = state.url.split( '/' ).filter( r => r && r.length )
      this.router.navigate( [ 'login' ] )
    } else if ( route.url[ 0 ].path === 'admin' ) {
      isAllowed = this.user.tpUser === UserRole.Administrator
      if ( !isAllowed ) {
        this.router.navigate( [ '403' ] )
      }
    }
    return isAllowed
  }
}
