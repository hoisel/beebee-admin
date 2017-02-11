import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Title } from '@angular/platform-browser'

import { TypePerson } from './../../../interfaces'
import { UserService } from './../../../providers'
import { CPF_MASK, PHONE_MASK, CELL_MASK } from '../../../utils/masks/masks'

import { isValidCPF, isValidEmail } from '../../../validators'

// declare var swal: any

@Component({
  selector: 'app-driver-form',
  providers: [UserService],
  templateUrl: './form.component.html'
})

export class DriverFormComponent implements OnInit {
  cpfMask: any = CPF_MASK
  phoneMask: any = PHONE_MASK
  cellMask: any = CELL_MASK
  PF: TypePerson = TypePerson.Personal
  private form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private title: Title,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Meu Negócio | Motoristas')
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      numDocFed: ['', Validators.required, isValidCPF],
      email: ['', [Validators.required, isValidEmail]],
      cellphone: ['', Validators.required],
      telephone: ['']
    })
  }

  submitForm(data: any): void {
    //
  }

  clearForm(): void {
    this.form.reset()
  }
}
