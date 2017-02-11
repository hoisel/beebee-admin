import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Title } from '@angular/platform-browser'
import { default as cep } from 'cep-promise'

import { BusinessService } from './../../../providers'
import { CNPJ_MASK, CEP_MASK, PHONE_MASK, CELL_MASK } from '../../../utils/masks/masks'
import { STATES } from '../../../utils/states/states.data'

import { isValidCNPJ, isValidEmail } from '../../../validators'

declare var swal: any

@Component({
  selector: 'app-profile-form',
  providers: [BusinessService],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class ProfileFormComponent implements OnInit {
  private form: FormGroup
  states = STATES
  cnpjMask = CNPJ_MASK
  cepMask = CEP_MASK
  phoneMask = PHONE_MASK
  cellMask = CELL_MASK

  constructor(
    private formBuilder: FormBuilder,
    private title: Title,
    public businessService: BusinessService
  ) {}

  ngOnInit() {
    this.title.setTitle('Meu Negócio | Perfil da Empresa')
    this.form = this.formBuilder.group({
      fantasyName: ['', [Validators.required, Validators.minLength(5)]],
      socialName: ['', Validators.required],
      cnpj: ['', [Validators.required, isValidCNPJ]],
      email: ['', [Validators.required, isValidEmail]],
      cellphone: ['', Validators.required],
      telephone: [''],
      zipCode: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      neighbor: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['Brasil'],
      complement: ['']
    })
  }

  submitForm(data: any) {
    if (!this.form.valid) {
      return
    }
    this.businessService.save(data)
      .toPromise()
      .then(resp => {
        swal(
          'Cadastro relizado',
          `O cadastros foi realizado com sucesso.`,
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
      country: 'Brasil'
    })
  }

  getAddress() {
    let zipCode = this.form.get('zipCode').value
    if (zipCode) {
      cep(zipCode).then(address => {
        this.form.patchValue({
          address: address.street,
          neighbor: address.neighborhood,
          city: address.city,
          state: address.state
        })
        document.getElementById('num').focus()
      }).catch(console.log)
    }
  }
}
