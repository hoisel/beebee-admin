/**
 * Não existe @types para twitter-bootstrap-wizard
 */
declare var $: any

import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.css']
})
export class FormWizardComponent implements OnInit {
  @Input() id: string
  constructor () { }

  ngOnInit () {
    if (!this.id) {
      this.id = `wizard_${Math.round(Math.random() * 1024)}`
    }
    $(`#${this.id}`).bootstrapWizard()
  }

}
