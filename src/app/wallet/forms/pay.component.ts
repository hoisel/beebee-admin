import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Title } from '@angular/platform-browser'
import { isValidCPF } from '../../../validators'

@Component({
  selector: 'app-wallet-pay-froms',
  templateUrl: 'pay.component.html'
})

export class WalletPayFormsComponent implements OnInit {
  private form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Meios de Pagamento | BeeBee')
    this.form = this.formBuilder.group({
      referenceTitle: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expiration: ['', [Validators.required]],
      cvvCode: ['', Validators.required],
      digit: ['', Validators.required],
      holderName: ['', Validators.required],
      holderCpf: ['', [Validators.required, isValidCPF]],
      holderZip: ['', Validators.required]
    })
  }

  submitForm(data) {
    console.log(data)
  }

}
