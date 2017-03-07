import { IModel } from './model.interface'
import { IUser } from './user.interface'
import { IVehicle, ICargoType, IOptional } from './vehicle.interface'
import { ITransaction } from './transaction.interface'

export interface IOrder extends IModel {
  orderUser: IUser
  orderUserId: string
  clientUser: IUser
  clientUserId: string
  transactions: Array<ITransaction>
  orderDate: Date
  paymentDate: Date
  acceptedDate: Date
  scheduleDate: Date
  closedDate: Date
  itens: Array<IOrderItem>
  options: Array<IOrderOptions>
  avaliation: number
  avaliationDate: Date
  avaliationComment: string
}

export interface IOrderItem extends IModel {
  vehicle: IVehicle
  cargo: ICargoType
  unitValue: number
  qtd: number
  typeQtd: string
  discount: number
  totalValue: number
}

export interface IOrderOptions extends IModel {
  optional: IOptional
  unitValue: number
  qtd: number
  discount: number
  totalValue: number
}

export enum TypePaymentStatusOrder {
  WaitingPayment = 0,
  WaitingDriver = 2,
  WaitingService = 4,
  WaitingAValiation = 6,
  Closed = 8,
  Canceled = 10
}
