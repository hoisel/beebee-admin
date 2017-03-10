import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable'

import { BaseService } from './base.service'
import { User } from '../model'
import { StorageService } from '../store'
import { API_ENDPOINT } from '../app.config'

@Injectable()
export class AuthService extends BaseService {

  // Url que tentou ser acessada sem sessão ativa
  public redirectLogin: string[] = [ 'plataforma' ]

  private onAuthChange$: BehaviorSubject<User>

  /**
   * Creates an instance of AuthService.
   * @param {Http} http
   *
   * @memberOf AuthService
   */
  constructor ( private http: Http, private storage: StorageService ) {
    super()
    this.onAuthChange$ = new BehaviorSubject<User>( this.user )
  }

  /**
   * Retorna se tem usuário logado ou não.
   */
  public get isAuthenticated(): boolean {
    return this.user && this.user.isAuthenticated
  }

  /**
   * Retorna um subject com o token.
   * Não pode ser escrito, apenas lido!
   */
  public get session(): Observable<User> {
    return this.onAuthChange$.asObservable()
  }

  /**
   * Requisição de login para a api
   * @param username: string - nome de usuário
   * @param password: string - senha do usuário
   */
  public login ( cpf: string, password: string ): Observable<User> {

    const body = { cpf: cpf, password: password }

    return this.http.post( `${ API_ENDPOINT }/login`, body, { headers: new Headers({ 'noIntercept': 'true' }) } )
      .map( this.extractData )
      .map(( resp: { token: string }) => {
        this.user = new User( resp.token )
        return this.user
      })
      .catch( this.handleError )
  }

  /**
   * Destroi a sessão do usuário atual.
   */
  public logout (): Promise<Date> {
    this.user = User.NullUser()
    return Promise.resolve( new Date() )
  }

  /**
   *
   *
   * @readonly
   * @private
   * @type {(string | undefined)}
   * @memberOf AuthService
   */
  public get user(): User | undefined {
    return this.storage.getItem( 'user' )
  }

  // public storage = { getItem ( k: string ): User { return null }, setItem ( K: string, obj: any ) { } }

  /**
   * Armazena um dado, relativo à autenticação, no navegador
   * @param key: TypeAuthKeys - Chave do dado
   * @param data: string|IAuthUsers - Dado que se quer guardar (string para 'token' e IAuthUsers para 'users')
   */
  public set user( user: User | undefined ) {
    this.storage.setItem( 'user', user )
    this.onAuthChange$.next( user )
  }
}
