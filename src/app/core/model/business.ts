import { Model, Address } from '.'

export interface Business extends Model {
  fantasyName: string
  socialName: string
  cnpj: string
  email: string
  telephone: string
  cellphone: string,
  address: Address
}
