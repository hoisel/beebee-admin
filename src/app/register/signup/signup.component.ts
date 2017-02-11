import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { SignupService, SharedDataService } from './../../../providers'
import { CPF_MASK, CELL_MASK } from './../../../utils/masks/masks'
import { isValidCPF, isValidEmail, passwordMatcher } from './../../../validators'

declare var swal: any

@Component({
  selector: 'app-signup',
  providers: [SignupService],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private form: FormGroup
  cpfMask = CPF_MASK
  cellMask = CELL_MASK

  constructor(
    private formBuilder: FormBuilder,
    private title: Title,
    private router: Router,
    private signup: SignupService,
    public shared: SharedDataService
  ) {}

  ngOnInit() {
    this.title.setTitle('Cadastre-se | BeeBee')
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      numDocFed: ['', [Validators.required, isValidCPF]],
      email: ['', [Validators.required, isValidEmail]],
      cellphone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', Validators.required],
      terms: ['', Validators.required],
    }, { validator: passwordMatcher })
  }

  submitForm(data: any) {
    if (!this.form.valid) {
      return
    }
    this.shared.data = { user: data }
    console.log(this.shared.data)
    this.router.navigate(['/cadastro/confirmacao'])

    if (data) {
      return
    }
    this.signup.register(data)
      .toPromise()
      .then(resp => {
        this.shared.data = { user: data }
        this.router.navigate(['/cadastro/confirmacao'])
      })
      .catch(err => {
        swal('Erro', err, 'error')
      })
  }
}
