import { AbstractControl } from '@angular/forms'
import cpf_cnpj from 'cpf_cnpj'

/**
 * Faz a validação de CNPJ
 */
export const isValidCNPJ = ( control: AbstractControl ): { [ key: string ]: boolean } => {
  return cpf_cnpj.CNPJ.isValid( control.value )
    ? null
    : { invalidCNPJ: true }
}
