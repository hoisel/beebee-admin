import { AbstractControl } from '@angular/forms'
const CPF = require('cpf_cnpj').CPF

/**
 * Faz a validação de CPF
 */
export const isValidCPF = (control: AbstractControl): {[key: string]: boolean} => {
  return CPF.isValid(control.value)
    ? null
    : { invalidCPF: true }
}
