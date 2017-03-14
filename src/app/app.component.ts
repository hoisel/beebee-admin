import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core'

import { StorageService, AuthService } from './core'

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {

  constructor( private auth: AuthService, private storage: StorageService ) { }

  public ngOnInit() {
    this.storage.token$.subscribe( newToken => this.auth.refreshCurrentUser( newToken ) )
  }

}
