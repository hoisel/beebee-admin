import { IModel, IAddress } from '../interfaces'

export interface IBusiness extends IModel, IAddress {
  fantasyName: string
  socialName: string
  cnpj: string
  email: string
  telephone: string
  cellphone: string
}
