import { IOrder } from './order.interface'
import { IModel } from './model.interface'
import { IUser } from './user.interface'


export interface ITransaction extends IModel {
    user: IUser
    userTransactionId: string
    urlBoleto: string
    order: IOrder
    orderId: string
    transactionDate: Date
    status: TypePaymentStatusTransaction
    value: number
    paymentId: string
    logs: Array<ITransactionLog>
}

export interface ITransactionLog extends IModel {
    date: Date
    status: TypePaymentStatusTransaction
    data: Object
}

export enum TypePaymentStatusTransaction {
    InProcess = 0,
    Paid = 1,
    Canceled = 2
}
