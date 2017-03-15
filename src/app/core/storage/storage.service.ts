import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable'
import { config } from '../app.config'
import { Token } from '../auth'

@Injectable()
export class StorageService {

  private authToken$: BehaviorSubject<Token>
  private AUTH_TOKEN_NAME: string = config.tokenName

  /**
   * Creates an instance of StorageService.
   *
   * @memberOf StorageService
   */
  constructor () {
    this.authToken$ = new BehaviorSubject<Token>( this.getAuthToken() )
  }

  /**
   * Retorna um subject com o token. Não pode ser escrito, apenas lido!
   *
   * @readonly
   * @type {Observable<User>}
   * @memberOf StorageService
   */
  public get token$(): Observable<Token> {
    return this.authToken$.asObservable()
  }

  /**
   *
   *
   * @param {string} jwtToken
   *
   * @memberOf StorageService
   */
  public setAuthToken ( jwtToken: Token ): void {
    this.execAndNotify(() => localStorage.setItem( this.AUTH_TOKEN_NAME, jwtToken ) )
  }

  /**
   *
   *
   * @returns {string}
   *
   * @memberOf StorageService
   */
  public getAuthToken (): Token {
    return localStorage.getItem( this.AUTH_TOKEN_NAME )
  }

  /**
   *
   *
   * @returns {void}
   *
   * @memberOf StorageService
   */
  public clearAuthToken (): void {
    this.execAndNotify(() => localStorage.removeItem( this.AUTH_TOKEN_NAME ) )
  }

  /**
   *
   *
   * @param {Function} fn
   *
   * @memberOf StorageService
   */
  private execAndNotify ( fn: Function ) {
    fn()
    this.authToken$.next( this.getAuthToken() )
  }

  /**
   *
   *
   * @param {any} k
   * @param {any} value
   *
   * @memberOf Store
   */
  public setItem ( key: string, value: any ) {
    localStorage.setItem( key, this.convertValue( value ) )
  }

  /**
   *
   *
   * @param {any} k
   * @returns
   *
   * @memberOf Store
   */
  public getItem ( key: string ) {
    let value = typeof key !== 'number' ? localStorage.getItem( key ) : localStorage.getItem( localStorage.key( key ) )
    return this.unconvertValue( value )
  }

  /**
   *
   *
   * @param {any} k
   *
   * @memberOf Store
   */
  public removeItem ( key: string ) {
    localStorage.removeItem( key )
  }

  /**
   *
   *
   * @param {string} key
   * @param {*} updates
   *
   * @memberOf Storage
   */
  public updateItem ( key: string, updates: any ) {
    const obj = this.getItem( key )
    obj && this.setItem( key, Object.assign( obj, updates ) )
  }

  /**
   *
   *
   *
   * @memberOf Store
   */
  public clear () {
    localStorage.clear()
  }

  /**
   *
   *
   * @private
   * @param {any} value
   * @returns
   *
   * @memberOf Store
   */
  private convertValue ( value: any ): any {
    return typeof value !== 'object' ? value : JSON.stringify( value )
  }

  /**
   *
   *
   * @private
   * @param {any} value
   * @returns
   *
   * @memberOf Store
   */
  private unconvertValue ( value: string ) {
    if ( value !== null ) {
      if ( value.indexOf( '{' ) === 0 || value.indexOf( '[' ) === 0 ) {
        return JSON.parse( value )
      } else {
        return null
      }
    }
  }
}
