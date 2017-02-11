import { AbstractControl } from '@angular/forms'
const CNPJ = require('cpf_cnpj').CNPJ

/**
 * Faz a validação de CNPJ
 */
export const isValidCNPJ = (control: AbstractControl): {[key: string]: boolean} => {
  return CNPJ.isValid(control.value)
    ? null
    : { invalidCNPJ: true }
}
