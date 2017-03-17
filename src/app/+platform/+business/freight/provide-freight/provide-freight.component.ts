import { Component, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from '../../../../core'
import { WizardComponent } from '../../../../shared'

@Component( {
  templateUrl: './provide-freight.component.html',
  styleUrls: [ './provide-freight.component.css' ]
})
export class ProvideFreightComponent implements OnInit {

  @ViewChild( 'wizard' ) public wizard: WizardComponent
  public hasDriver: boolean = false
  public hasVehicle: boolean = false
  public hasCompany: boolean = false
  /**
   * Creates an instance of ProvideFreightComponent.
   * @param {Router} router
   * @param {AuthService} auth
   *
   * @memberOf ProvideFreightComponent
   */
  constructor( private router: Router, public auth: AuthService ) { }

  /**
   *
   *
   *
   * @memberOf ProvideFreightComponent
   */
  public ngOnInit() {

  }

  /**
   *
   *
   *
   * @memberOf ProvideFreightComponent
   */
  public onDriverSaved() {
    this.hasDriver = true
    this.router.navigate( [ '/plataforma/negocios/dashboard' ] )
  }

  /**
   *
   *
   *
   * @memberOf ProvideFreightComponent
   */
  public onVehicleSaved() {
    this.hasVehicle = true
    this.nextStep()
  }

  /**
   *
   *
   *
   * @memberOf ProvideFreightComponent
   */
  public onCompanySaved() {
    this.hasCompany = true
    this.nextStep()
  }

  /**
   *
   *
   * @private
   *
   * @memberOf ProvideFreightComponent
   */
  private nextStep() {
    this.wizard.next()
  }

  /**
   *
   *
   *
   * @memberOf ProvideFreightComponent
   */
  public scrollToTop() {
    $( 'body' ).animate( {
      scrollTop: $( 'body' ).offset().top
    }, 1000 )
  }
}
