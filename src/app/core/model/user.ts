import { Model } from './model'
import { Vehicle } from './vehicle'
import { Order } from './order'
import { Transaction } from './transaction'
import { JwtHelper } from '../auth'

export class User extends Model implements Address {

  private jwt: JwtHelper = new JwtHelper()

  public static NullUser (): User {
    return new User()
  }

  public tpPerson: PersonType
  public tpUser: UserRole
  public numDocFed: string = ''
  public rg?: string = ''
  public cnh?: string = ''
  public maturityCnh?: Date
  public telephone: string = ''
  public cellphone: string = ''
  public email: string = ''
  public password: string = ''
  public newPassword?: string = ''
  public userContractor: User
  public userIdContractor: string = ''
  public userIndicator: User
  public userIdIndicator: string = ''
  public vehicles: Vehicle[] = []
  public userOrders: Order[] = []
  public clientOrders: Order[] = []
  public transactions: Transaction[] = []

  // address
  public zipCode: string = ''
  public address: string = ''
  public number: string = ''
  public complement: string = ''
  public neighbor: string = ''
  public city: string = ''
  public state: string = ''
  public country: string = ''

  public token: string | undefined

  /**
   * Creates an instance of User.
   * @param {User} user
   *
   * @memberOf User
   */
  constructor ( token?: string ) {
    super()

    if ( token ) {
      Object.assign( this, this.jwt.decodeToken( token ), { token: token } )
    }
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf User
   */
  public get isAuthenticated () {
    return !!this.token && !this.jwt.isTokenExpired( this.token )
  }

  /**
   *
   *
   * @readonly
   * @type {Date}
   * @memberOf User
   */
  public get expirationDate(): Date {
    return this.jwt.getTokenExpirationDate( this.token )
  }
}

export enum PersonType {
  Personal = 0,
  Enterprise = 1
}

export enum UserRole {
  Client = 0,
  Freighter = 1,
  Operator = 2,
  Administrator = 3
}

export interface Address {
  zipCode: string
  address: string
  number: string
  complement: string
  neighbor: string
  city: string
  state: string
  country: string
}
