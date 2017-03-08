import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core'

import { UiStateStoreService, UserRole } from '../core'

@Component( {
  templateUrl: './platform.component.html',
  styleUrls: [ './platform.component.css' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
} )
export class PlatformComponent implements OnInit {

  /**
   * Creates an instance of PlatformComponent.
   * @param {UiStateStoreService} uiStateStore
   *
   * @memberOf PlatformComponent
   */
  constructor ( private uiStateStore: UiStateStoreService ) { }

  /**
   *
   *
   *
   * @memberOf PlatformComponent
   */
  public ngOnInit () {
    this.uiStateStore.loadMenu( UserRole.Client )
  }
}
