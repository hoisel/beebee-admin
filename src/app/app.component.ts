import { Component, OnInit } from '@angular/core'

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
  constructor( private auth: AuthService, private storage: StorageService ) { }

  /**
   *
   *
   *
   * @memberOf AppComponent
   */
  public ngOnInit() {
    this.storage.token$.subscribe( newToken => this.auth.refreshCurrentUser( newToken ) )
  }
}
