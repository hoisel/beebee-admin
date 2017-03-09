import { Model, Address } from '.'

export interface IBusiness extends Model, Address {
  fantasyName: string
  socialName: string
  cnpj: string
  email: string
  telephone: string
  cellphone: string
}
