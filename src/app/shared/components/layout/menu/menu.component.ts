import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs/Subscription'

import { Menu, UiStateStoreService } from '../../../../core'

@Component( {
  selector: 'bee-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
} )
export class MenuComponent implements OnInit, OnDestroy {

  public menuSubs: Subscription

  /**
   *
   *
   * @type {Observable<Menu>}
   * @memberOf MenuComponent
   */
  public model: Menu

  /**
   * Creates an instance of MenuComponent.
   * @param {UiStateStoreService} uiStateStore
   *
   * @memberOf MenuComponent
   */
  constructor ( private uiStateStore: UiStateStoreService ) { }

  /**
   *
   *
   *
   * @memberOf MenuComponent
   */
  public ngOnInit () {
    this.menuSubs = this.uiStateStore.menu.subscribe( menu => this.model = menu )
  }

  /**
   *
   *
   *
   * @memberOf MenuComponent
   */
  public ngOnDestroy () {
    this.menuSubs.unsubscribe()
  }
}
