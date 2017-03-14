import { UserRole } from '../model'
import { JwtHelper, Token } from '../auth'
import { pick } from '../utils'

export class UserClaims {

  private jwt: JwtHelper = new JwtHelper()

  public static DefaultUser(): UserClaims {
    return new UserClaims()
  }

  public id: string = ''
  public name: string = ''
  public role: UserRole | undefined
  private token: Token | undefined

  /**
   * Creates an instance of UserClaims.
   * @param {Token} [token]
   *
   * @memberOf UserClaims
   */
  constructor( token?: Token ) {
    if ( token ) {
      const userClaims = pick( this.jwt.decodeToken( token ), [ 'id', 'role', 'name' ] )
      Object.assign( this, userClaims, { token: token })
    }
  }

  /**
   *
   *
   * @returns
   *
   * @memberOf User
   */
  public get isAuthenticated() {
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

