import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { IUser, TypeAuthKeys, TypePerson, TypeUser, IVehicle, IOrder, ITransaction } from '../interfaces'
import * as decode from 'jwt-decode'
import { AuthService } from './auth.service'
import { BaseService } from './base.service'

@Injectable()
export class UserService extends BaseService implements IUser {

  private _id: string
  name: string
  insertedAt: Date
  updatedAt: Date
  userId: string
  updatedUserId: string
  tpPerson: TypePerson
  tpUser: TypeUser
  active: boolean
  numDocFed: string
  telephone: string
  cellphone: string
  email: string
  password: string
  zipCode: string
  address: string
  number: string
  complement: string
  neighbor: string
  city: string
  state: string
  country: string
  userContractor: IUser
  userIdContractor: string
  userIndicator: IUser
  userIdIndicator: string
  vehicles: Array<IVehicle>
  userOrders: Array<IOrder>
  clientOrders: Array<IOrder>
  transactions: Array<ITransaction>

  constructor ( public http: Http, private auth: AuthService ) {
    super( http )
    super.setResource( 'users' )
    this.auth.session.subscribe( token => {
      if ( token ) {
        this.refresh( decode( token ) )
        this.auth.set( TypeAuthKeys.users, { email: this.email, name: this.name } )
      }
    } )
  }

  /**
   * ID não pode ser escrito somente lido
   */
  get id (): string { return this._id }

  /**
   * Atualiza os dados do usuário a partir de um objeto
   * com implementação de IUser.
   */
  private refresh ( user: IUser ): void {
    this._id = user.id
    this.name = user.name
    this.insertedAt = user.insertedAt
    this.updatedAt = user.updatedAt
    this.userId = user.userId
    this.updatedUserId = user.updatedUserId
    this.tpPerson = user.tpPerson
    this.tpUser = user.tpUser
    this.active = user.active
    this.numDocFed = user.numDocFed
    this.telephone = user.telephone
    this.cellphone = user.cellphone
    this.email = user.email
    this.password = user.password
    this.zipCode = user.zipCode
    this.address = user.address
    this.number = user.number
    this.complement = user.complement
    this.neighbor = user.neighbor
    this.city = user.city
    this.state = user.state
    this.country = user.country
    this.userContractor = user.userContractor
    this.userIdContractor = user.userIdContractor
    this.vehicles = user.vehicles
    this.userOrders = user.userOrders
    this.clientOrders = user.clientOrders
    this.transactions = user.transactions
  }

}
