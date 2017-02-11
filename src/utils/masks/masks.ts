export const CNPJ_MASK = [
  /\d/, /\d/, '.',
  /\d/, /\d/, /\d/, '.',
  /\d/, /\d/, /\d/, '/',
  /\d/, /\d/, /\d/, /\d/, '-',
  /\d/, /\d/
]

export const CPF_MASK = [
  /\d/, /\d/, /\d/, '.',
  /\d/, /\d/, /\d/, '.',
  /\d/, /\d/, /\d/, '-',
  /\d/, /\d/
]

export const CEP_MASK = [
  /\d/, /\d/, '.',
  /\d/, /\d/, /\d/, '-',
  /\d/, /\d/, /\d/
]

export const PHONE_MASK = [
  '(', /\d/, /\d/, ')', ' ',
  /\d/, /\d/, /\d/, /\d/, '-',
  /\d/, /\d/, /\d/, /\d/
]

export const CELL_MASK = [
  '(', /\d/, /\d/, ')', ' ',
  /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-',
  /\d/, /\d/, /\d/, /\d/
]

export const PLAQUE_MASK = [
  /[A-Za-z]/, /[A-Za-z]/, /[A-Za-z]/,
  /\d/, /\d/, /\d/, /\d/
]
