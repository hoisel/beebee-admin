import { Component, OnInit } from '@angular/core'
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb'

import { UiStateStoreService, AuthService } from '../core'

@Component( {
  templateUrl: './platform.component.html',
  styleUrls: [ './platform.component.css' ]
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
    this.breadcrumbService.addFriendlyNameForRoute( '/plataforma/fazer-frete', 'fazer frete' )
    this.breadcrumbService.addFriendlyNameForRoute( '/plataforma/pedir-frete', 'pedir frete' )
    this.breadcrumbService.addFriendlyNameForRoute( '/plataforma/minha-conta', 'minha conta' )
    this.breadcrumbService.addFriendlyNameForRoute( '/plataforma/agenda/em-andamento', 'em andamento' )
    this.breadcrumbService.addFriendlyNameForRoute( '/plataforma/suport/faq', 'perguntas frequentes' )
  }
}
