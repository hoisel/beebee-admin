import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { CompaniesApiService, AuthService, Company, CompanyProfile } from '../../../../core'

@Component( {
  templateUrl: './company-register.component.html',
  styleUrls: [ './company-register.component.css' ]
})
export class CompanyRegisterComponent {

  public company: Company

  /**
   * Creates an instance of CompanyRegisterComponent.
   * @param {Router} router
   * @param {CompaniesApiService} companyService
   * @param {AuthService} auth
   *
   * @memberOf CompanyRegisterComponent
   */
  constructor( private router: Router, private companyService: CompaniesApiService, private auth: AuthService ) { }

  /**
   *
   *
   * @param {Company} company
   *
   * @memberOf ProfileComponent
   */
  public onSubmit( company: Company ) {
    this.companyService.create( company )
      .subscribe( {
        next: ( company: Company ) => {
          this.auth.userProfile = new CompanyProfile( company.id, company.tradingName )
          this.router.navigate( [ '/plataforma/negocios/perfil' ] )

          swal( 'Sucesso', 'O cadastro foi atualizado com sucesso.', 'success' )
        },
        error: error => swal( 'Erro', `Ocorreu algum erro no cadastro. Erro ${ error }`, 'error' )
      })
  }
}
