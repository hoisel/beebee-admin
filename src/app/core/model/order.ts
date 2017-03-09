import { Model } from './model'
import { User } from './user'
import { Vehicle, CargoType, Optional } from './vehicle'
import { Transaction } from './transaction'

export class Order extends Model {
  orderUser: User
  orderUserId: string
  clientUser: User
  clientUserId: string
  transactions: Transaction[]
  orderDate: Date
  paymentDate: Date
  acceptedDate: Date
  scheduleDate: Date
  closedDate: Date
  itens: OrderItem[]
  options: OrderOptions[]
  avaliation: number
  avaliationDate: Date
  avaliationComment: string
}

export class OrderItem extends Model {
  vehicle: Vehicle
  cargo: CargoType
  unitValue: number
  qtd: number
  typeQtd: string
  discount: number
  totalValue: number
}

export class OrderOptions extends Model {
  optional: Optional
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
