import { Component, OnInit, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit, OnDestroy {

  assunto: string = null
  numeroPedido: string = null
  mensagem: string = null
  private _email: string = 'sac@beebee.com.br'
  private _hotline: string = '0800 833 8331'

  constructor() { }

  get email(): string { return this._email }
  get hotline(): string { return this._hotline }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 500)
  }

  ngOnDestroy() { }

  submit(e: Event): void {
    e.preventDefault()
    console.log(this.assunto, this.numeroPedido, this.mensagem)
  }

}
