import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core'
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb'

import { UiStateStoreService, AuthService } from '../core'

@Component( {
  templateUrl: './admin.component.html',
  styleUrls: [ './admin.component.css' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class AdminComponent implements OnInit {

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
    this.breadcrumbService.addFriendlyNameForRoute( '/admin/dashboard', 'dashboard' )
    this.breadcrumbService.addFriendlyNameForRoute( '/admin/faq', 'perguntas frequentes' )
    this.breadcrumbService.addFriendlyNameForRoute( '/admin/veiculos', 'veículos' )
    this.breadcrumbService.addFriendlyNameForRoute( '/admin/usuarios', 'usuários' )
    this.breadcrumbService.addFriendlyNameForRoute( '/admin/configuracoes', 'configurações' )
    this.breadcrumbService.addFriendlyNameForRoute( '/admin/configuracoes/veiculos', 'veículos' )
  }
}
