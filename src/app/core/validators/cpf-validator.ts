import { AbstractControl } from '@angular/forms'
import cpf_cnpj from 'cpf_cnpj'

/**
 * Faz a validação de CPF
 */
export const isValidCPF = ( control: AbstractControl ): { [ key: string ]: boolean } => {
  return cpf_cnpj.CPF.isValid( control.value )
    ? null
    : { invalidCPF: true }
}
