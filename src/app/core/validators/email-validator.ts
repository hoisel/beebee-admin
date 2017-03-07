import { AbstractControl } from '@angular/forms'

/**
 * Faz a validação de E-mail
 */
export const isValidEmail = ( control: AbstractControl ): { [ key: string ]: boolean } => {
  let email = control.value

  return /^[\w\.\-]{3,}\@[a-zA-Z0-9\.\-]{3,}\.[A-Za-z]{2,}$/.test( email )
    ? null
    : { invalidEmail: true }
}
