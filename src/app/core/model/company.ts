import { Model, Address } from '.'

export interface Company extends Model {
  tradingName: string
  companyName: string
  cnpj: string
  email: string
  phone: string
  cellphone: string,
  address: Address,
  approved: boolean,
  isDriver: boolean,
  isOwner: boolean,
  isUser: boolean,
  makeFreights: boolean,
  requestFreights: boolean,
  owner: string
}
