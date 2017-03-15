import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { PLATE_MASK, YEAR_MASK, VehiclesApiService, CategoriesApiService } from '../../../../core'

@Component( {
  templateUrl: './vehicle-edit.component.html',
  styleUrls: [ './vehicle-edit.component.css' ]
})
export class VehicleEditComponent implements OnInit {

  public vehicleTypes: any[]
  public plateMask: any = PLATE_MASK
  public yearMask: any = YEAR_MASK
  private form: FormGroup

  /**
   * Creates an instance of VehicleEditComponent.
   * @param {FormBuilder} formBuilder
   * @param {VehicleTypesService} vehicletypesService
   * @param {VehicleService} vehicleService
   *
   * @memberOf VehicleEditComponent
   */
  constructor(
    private formBuilder: FormBuilder,
    private categoriesApiService: CategoriesApiService,
    private vehicleService: VehiclesApiService
  ) { }

  /**
   *
   *
   *
   * @memberOf VehicleEditComponent
   */
  public ngOnInit(): void {
    this.getCategories()
    this.form = this.formBuilder.group( {
      categoryId: [ '0', [ Validators.required ] ],
      make: [ '', Validators.required ],
      model: [ '', Validators.required ],
      year: [ '', Validators.required ],
      plate: [ '', Validators.required ],
      renavam: [ '', Validators.required ]
    })
  }

  /**
   *
   *
   * @param {*} data
   *
   * @memberOf VehicleEditComponent
   */
  public submitForm( data: any ) {
    if ( !this.form.valid ) {
      return
    }
    data.year = `${ data.year }-01-01`
    this.vehicleService.save( data )
      .toPromise()
      .then( resp => {
        swal( 'Cadastro relizado', `O cadastro foi realizado com sucesso.`, 'success' )
        this.clearForm()
      })
      .catch( error => swal( 'Erro', `Ocorreu algum erro ao salvar. Erro ${ error }`, 'error' ) )
  }

  /**
   *
   *
   *
   * @memberOf VehicleEditComponent
   */
  public clearForm() {
    this.form.reset( { categoryId: '0' })
  }

  /**
   *
   *
   *
   * @memberOf VehicleEditComponent
   */
  public plateToUpper() {
    $( '#plate' ).val( $( '#plate' ).val().toUpperCase() )
  }


  /**
   *
   *
   *
   * @memberOf VehicleEditComponent
   */
  public getCategories() {
    this.categoriesApiService.getAll().subscribe( categories => this.vehicleTypes = categories )
  }
}

