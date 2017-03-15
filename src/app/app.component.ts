import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router'

import { StorageService, AuthService } from './core'

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  /**
   * Creates an instance of AppComponent.
   * @param {AuthService} auth
   * @param {StorageService} storage
   *
   * @memberOf AppComponent
   */
  constructor (
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private auth: AuthService,
    private storage: StorageService ) { }

  /**
   *
   *
   *
   * @memberOf AppComponent
   */
  public ngOnInit () {
    this.configureRouteTitles()

    this.storage.token$.subscribe( newToken => this.auth.refreshCurrentUser( newToken ) )
  }

  /**
   * ref: https://toddmotto.com/dynamic-page-titles-angular-2-router-events
   *
   * @private
   *
   * @memberOf AppComponent
   */
  private configureRouteTitles () {
    this.router.events
      .filter( event => event instanceof NavigationEnd )
      .map(() => this.activatedRoute )
      .map( route => {
        // traverse over the state tree to find the last activated route,
        // and then return it to the stream
        while ( route.firstChild ) {
          route = route.firstChild
        }
        return route
      })
      .filter( route => route.outlet === 'primary' )
      .mergeMap( route => route.data )
      .subscribe( event => this.titleService.setTitle( event[ 'title' ] || 'Bee Bee' ) )
  }
}
