import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core'
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb'

import { UiStateStoreService, UserRole } from '../core'

@Component( {
  templateUrl: './platform.component.html',
  styleUrls: [ './platform.component.css' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class PlatformComponent implements OnInit {

  /**
   * Creates an instance of PlatformComponent.
   * @param {UiStateStoreService} uiStateStore
   * @param {BreadcrumbService} breadcrumbService
   *
   * @memberOf PlatformComponent
   */
  constructor ( private uiStateStore: UiStateStoreService, private breadcrumbService: BreadcrumbService ) { }

  /**
   *
   *
   *
   * @memberOf PlatformComponent
   */
  public ngOnInit () {
    this.uiStateStore.loadMenu( UserRole.Client )
    this.configureBreadCrumb()
  }

  /**
   *
   *
   * @private
   *
   * @memberOf PlatformComponent
   */
  private configureBreadCrumb () {
    this.breadcrumbService.addFriendlyNameForRoute( '/plataforma/dashboard', 'ashboard' )
    this.breadcrumbService.addFriendlyNameForRoute( '/plataforma/faq', 'perguntas frequentes' )
    this.breadcrumbService.addFriendlyNameForRoute( '/plataforma/veiculos', 'veículos' )
    this.breadcrumbService.addFriendlyNameForRoute( '/plataforma/usuarios', 'usuários' )
    this.breadcrumbService.addFriendlyNameForRoute( '/plataforma/configuracoes', 'configurações' )
    this.breadcrumbService.addFriendlyNameForRoute( '/plataforma/configuracoes/veiculos', 'veículos' )
  }
}