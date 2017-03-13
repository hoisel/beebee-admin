import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core'
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb'

import { UiStateStoreService, AuthService } from '../core'

@Component( {
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: [ './platform.component.css' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class PlatformComponent implements OnInit {

  /**
   * Creates an instance of AdminComponent.
   * @param {UiStateStoreService} uiStateStore
   * @param {BreadcrumbService} breadcrumbService
   *
   * @memberOf AdminComponent
   */
  constructor ( private auth: AuthService, private uiStateStore: UiStateStoreService, private breadcrumbService: BreadcrumbService ) { }

  /**
   *
   *
   *
   * @memberOf AdminComponent
   */
  public ngOnInit () {
    this.uiStateStore.loadMenu( this.auth.user.role )
    this.configureBreadCrumb()
  }

  /**
   *
   *
   * @private
   *
   * @memberOf AdminComponent
   */
  private configureBreadCrumb () {
    this.breadcrumbService.addFriendlyNameForRoute( '/plataforma/dashboard', 'dashboard' )
    this.breadcrumbService.addFriendlyNameForRoute( '/plataforma/carteira/pagamento', 'meios de pagamento' )
    this.breadcrumbService.addFriendlyNameForRoute( '/plataforma/carteira/recebimento', 'meios de recebimento' )
  }
}
