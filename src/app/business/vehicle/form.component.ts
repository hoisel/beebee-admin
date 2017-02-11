import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import * as $ from 'jquery'

import { VehicleTypesService, VehicleService, UserService } from './../../../providers'
import { PLAQUE_MASK } from './../../../utils/masks/masks'

declare var swal: any

@Component({
  selector: 'app-vehicle-form',
  templateUrl: 'form.component.html',
  providers: [VehicleTypesService, VehicleService, UserService]
})
export class VehicleFormComponent implements OnInit {
  vehicleTypes: any[]
  plaqueMask: any = PLAQUE_MASK
  private form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private title: Title,
    private user: UserService,
    private vehicletypesService: VehicleTypesService,
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.getPlaques()
    this.title.setTitle('Meu Negócio | Motoristas')
    this.form = this.formBuilder.group({
      vehicleTypeId: ['0', [Validators.required, Validators.minLength(5)]],
      businessOwnerId: [this.user.id, Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      plate: ['', Validators.required],
      renavam: ['', Validators.required]
    })
  }

  submitForm(data: any) {
    console.log(data)
    if (!this.form.valid) {
      return
    }
    this.vehicleService.save(data)
      .toPromise()
      .then(resp => {
        swal(
          'Cadastro relizado',
          `O cadastro foi realizado com sucesso.`,
          'success'
        )
        this.clearForm()
      })
      .catch(err => {
        swal(
          'Erro',
          `Ocorreu algum erro ao salvar. Erro ${err}`,
          'error'
        )
        console.error(err)
      })
  }

  clearForm() {
    this.form.reset({
      businessOwnerId: this.user.id,
      vehicleTypeId: '0'
    })
  }

  plaqueToUpper() {
    $('#plaque').val($('#plaque').val().toUpperCase())
  }

  getPlaques() {
    this.vehicletypesService.get().subscribe(type => {
      this.vehicleTypes = type.map(t => {
        return t
      })
    })
  }
}
