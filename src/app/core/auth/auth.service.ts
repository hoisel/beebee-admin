import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

import { UserClaims } from './user-claims'
import { BaseService } from '../providers/base.service'
import { StorageService } from '../storage'
import { config } from '../app.config'
import { Token } from './token.model'
import { Profile, PersonalProfile } from './profile.model'

@Injectable()
export class AuthService extends BaseService {

  // Url que tentou ser acessada sem sessão ativa
  public redirectUrl: string | undefined
  public redirectLogin: string[] = [ 'plataforma' ]
  private currentUser: UserClaims
  public profileSubject: BehaviorSubject<Profile>

  /**
   * Creates an instance of AuthService.
   * @param {Http} http
   *
   * @memberOf AuthService
   */
  constructor( private http: Http, private storage: StorageService ) {
    super()
    this.currentUser = UserClaims.DefaultUser()
    this.profileSubject = new BehaviorSubject<Profile>( this.userProfile )
  }

  /**
   * Retorna se tem usuário logado ou não.
   */
  public get isAuthenticated(): boolean {
    return this.currentUser.isAuthenticated
  }

  /**
   *
   *
   * @readonly
   * @type {User}
   * @memberOf AuthService
   */
  public get user(): UserClaims {
    return this.currentUser
  }

  /**
   * Requisição de login para a api
   * @param username: string - nome de usuário
   * @param password: string - senha do usuário
   */
  public login( credentials: { cpf: string, password: string } | Token ): Observable<UserClaims> {

    // se for token, já salva direto
    if ( typeof credentials === 'string' ) {
      this.storage.setAuthToken( credentials )
      return Observable.of( this.user )
    }

    return this.http.post( `${ config.apiEndPoint }/login`, credentials, { headers: new Headers( { 'noIntercept': 'true' }) })
      .map( this.extractData )
      .map(( resp: { token: Token }) => {
        this.storage.setAuthToken( resp.token )
        return this.user
      })
      .catch( this.handleError )
  }

  /**
   *
   *
   * @readonly
   * @type {Observable<Profile>}
   * @memberOf AuthService
   */
  public get userProfile$(): Observable<Profile> {
    return this.profileSubject.asObservable()
  }

  /**
   *
   *
   * @readonly
   * @type {Profile}
   * @memberOf AuthService
   */
  public get userProfile(): Profile {
    return this.storage.getItem( this.userProfileKey ) as Profile
  }

  /**
   *
   *
   *
   * @memberOf AuthService
   */
  public set userProfile( profile: Profile ) {
    this.storage.setItem( this.userProfileKey, profile )
    this.profileSubject.next( profile )
  }

  /**
   * Destroi a sessão do usuário atual.
   */
  public logout(): Promise<Date> {
    this.storage.clearAuthToken()
    return Promise.resolve( new Date() )
  }

  /**
   *
   *
   * @private
   * @param {Token} token
   *
   * @memberOf AuthService
   */
  public refreshCurrentUser( newToken?: Token ) {
    this.currentUser = new UserClaims( newToken )
    // this.currentUser.role = 'user'
    this.redirectLogin = this.currentUser.role === 'user' ? [ 'plataforma' ] : [ 'admin' ]
    // console.log( 'User: ', this.currentUser )

    // - re-salva e força uma publicação do profile
    this.userProfile = this.userProfile || new PersonalProfile( this.currentUser.id, this.currentUser.name )
  }

  /**
   *
   *
   * @readonly
   * @private
   * @type {string}
   * @memberOf AuthService
   */
  private get userProfileKey(): string {
    return `user-${ this.user.id }-profile`
  }
}
