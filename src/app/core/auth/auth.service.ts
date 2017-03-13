import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { User } from '../model'
import { BaseService } from '../providers/base.service'
import { StorageService } from '../storage'
import { config } from '../app.config'
import { Token } from './token.model'

@Injectable()
export class AuthService extends BaseService {

  // Url que tentou ser acessada sem sessão ativa
  public redirectUrl: string | undefined
  public redirectLogin: string[] = [ 'plataforma' ]
  private currentUser: User

  /**
   * Creates an instance of AuthService.
   * @param {Http} http
   *
   * @memberOf AuthService
   */
  constructor ( private http: Http, private storage: StorageService ) {
    super()
    this.currentUser = User.DefaultUser()
    this.storage.token$.subscribe( newToken => this.refreshCurrentUser( newToken ) )
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
  public get user(): User {
    return this.currentUser
  }

  /**
   * Requisição de login para a api
   * @param username: string - nome de usuário
   * @param password: string - senha do usuário
   */
  public login ( credentials: { cpf: string, password: string } | Token ): Observable<User> {

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



  public invalid (): Observable<any> {
    return this.http.get( `${ config.apiEndPoint }/token-invalid` )
      .map( this.extractData )
      .map( resp => {
        console.log( resp )
        return resp
      })
      .catch( this.handleError )
  }

  public expired (): Observable<any> {
    return this.http.get( `${ config.apiEndPoint }/token-expired` )
      .map( this.extractData )
      .map( resp => {
        console.log( resp )
        return resp
      })
      .catch( this.handleError )
  }

  /**
   * Destroi a sessão do usuário atual.
   */
  public logout (): Promise<Date> {
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
  private refreshCurrentUser ( newToken: Token ) {
    this.currentUser = new User( newToken )
    console.log( 'User: ', this.currentUser )
  }
}
