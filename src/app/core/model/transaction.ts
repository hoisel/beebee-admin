import { Order } from './order'
import { Model } from './model'
import { User } from './user'

export class Transaction extends Model {
  user: User
  userTransactionId: string
  urlBoleto: string
  order: Order
  orderId: string
  transactionDate: Date
  status: TypePaymentStatusTransaction
  value: number
  paymentId: string
  logs: TransactionLog[]
}

export class TransactionLog extends Model {
  date: Date
  status: TypePaymentStatusTransaction
  data: Object
}

export enum TypePaymentStatusTransaction {
  InProcess = 0,
  Paid = 1,
  Canceled = 2
}
