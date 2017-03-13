import { Model, Business, Address, UserRole } from '../model'
import { JwtHelper, Token } from '../auth'

export class User extends Model {

  private jwt: JwtHelper = new JwtHelper()

  public static DefaultUser (): User {
    return new User()
  }

  public address: Address
  public companies: Business[] = []
  public role: UserRole | undefined
  public cellphone: string = ''
  public cpf: string = ''
  public driverLicence: string = ''
  public driverLicenceExpiration: string = ''
  public email: string = ''
  public paymentAccounts: string = ''
  public phone: string = ''
  public receiptAccounts: string = ''
  public rg: string = ''
  private token: Token | undefined

  /**
   * Creates an instance of User.
   * @param {User} user
   *
   * @memberOf User
   */
  constructor ( token?: Token ) {
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
