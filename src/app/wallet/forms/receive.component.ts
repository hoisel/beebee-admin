import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Title } from '@angular/platform-browser'

import { WalletService } from './../../../providers'
import { CPF_MASK } from '../../../utils/masks/masks'
import { STATES } from '../../../utils/states/states.data'
import { isValidCPF } from '../../../validators'

declare var swal: any

@Component({
  selector: 'app-wallet-receive-forms',
  templateUrl: 'receive.component.html',
  providers: [WalletService]
})


export class WalletReceiveFormsComponent implements OnInit {
  private form: FormGroup
  states = STATES
  cpfMask = CPF_MASK

  constructor(
    private formBuilder: FormBuilder,
    private title: Title,
    public wallet: WalletService
  ) {}

  ngOnInit() {
    this.title.setTitle('Meios de Recebimento | BeeBee')
    this.form = this.formBuilder.group({
      referenceTitle: ['', Validators.required],
      bankNumber: ['', Validators.required],
      agency: ['', [Validators.required]],
      account: ['', Validators.required],
      digit: ['', Validators.required],
      holderName: ['', Validators.required],
      holderCpf: ['', [Validators.required, isValidCPF]]
    })
  }

  submitForm(data: any) {
    console.log(data)
    if (!this.form.valid) {
      return
    }
    this.wallet.save(data)
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
    this.form.reset()
  }
}
