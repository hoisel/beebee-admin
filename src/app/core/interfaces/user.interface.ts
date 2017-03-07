import { IModel } from './model.interface'
import { IVehicle } from './vehicle.interface'
import { IOrder } from './order.interface'
import { ITransaction } from './transaction.interface'

export interface IUser extends IModel, IAddress {
  tpPerson: TypePerson
  tpUser: TypeUser
  numDocFed: string
  rg?: string
  cnh?: string
  maturityCnh?: Date
  telephone: string
  cellphone: string
  email: string
  password: string
  newPassword?: string
  userContractor: IUser
  userIdContractor: string
  userIndicator: IUser
  userIdIndicator: string
  vehicles: Array<IVehicle>
  userOrders: Array<IOrder>
  clientOrders: Array<IOrder>
  transactions: Array<ITransaction>
}

export enum TypePerson {
  Personal = 0,
  Enterprise = 1
}

export enum TypeUser {
  Client = 0,
  Freighter = 1,
  Operator = 2,
  Administrator = 3
}

export interface IAddress {
  zipCode: string
  address: string
  number: string
  complement: string
  neighbor: string
  city: string
  state: string
  country: string
}
