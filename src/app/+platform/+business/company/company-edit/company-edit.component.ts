import { Component, OnInit } from '@angular/core'
import { CompaniesApiService, AuthService, Company, CompanyProfile } from '../../../../core'

@Component( {
  templateUrl: './company-edit.component.html',
  styleUrls: [ './company-edit.component.css' ]
})
export class CompanyEditComponent implements OnInit {

  public company: Company

  /**
   * Creates an instance of CompanyEditComponent.
   * @param {CompaniesApiService} companyService
   * @param {AuthService} auth
   *
   * @memberOf CompanyEditComponent
   */
  constructor( private companyService: CompaniesApiService, private auth: AuthService ) { }

  /**
   *
   *
   *
   * @memberOf ProfileComponent
   */
  public ngOnInit() {
    if ( this.auth.userProfile.isCompanyProfile ) {
      this.companyService.get( this.auth.userProfile.id ).subscribe( company => this.company = company )
    }
  }

  /**
   *
   *
   * @param {Company} company
   *
   * @memberOf ProfileComponent
   */
  public onSubmit( company: Company ) {
    this.companyService.save( company )
      .subscribe( {
        next: ( company: Company ) => {
          this.auth.userProfile = new CompanyProfile( company.id, company.tradingName )
          swal( 'Sucesso', company.id ? 'O cadastro foi atualizado com sucesso.' : 'O cadastro foi realizado com sucesso.', 'success' )
        },
        error: error => swal( 'Erro', `Ocorreu algum erro ao salvar. Erro ${ error }`, 'error' )
      })
  }
}
