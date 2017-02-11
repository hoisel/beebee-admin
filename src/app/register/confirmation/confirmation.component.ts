import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { SharedDataService } from './../../../providers'

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  private form: FormGroup
  cellphone: string

  constructor(
    public shared: SharedDataService,
    public formBuilder: FormBuilder,
    public title: Title,
    public router: Router
  ) {
    this.shared.data && this.shared.data.user
      ? this.cellphone = this.shared.data.user.cellphone
      : this.router.navigate(['/cadastro'])
  }

  ngOnInit() {
    this.title.setTitle('Confirmação | BeeBee')
    this.form = this.formBuilder.group({
      confirmationCode: ['', [Validators.required]]
    })
  }

  submitForm(code) {
    if (!code) {
      return
    }
    // TODO validar token e redirecionar
    this.router.navigate(['/cadastro/comecar'])
  }
}
