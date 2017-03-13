import { Response, Request, Headers, RequestOptions, ConnectionBackend } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { InterceptorConfig } from './interceptor.config'
import { HttpAuthInterceptor } from './http-auth-interceptor.service'
import { StorageService } from '../storage'
import { config } from '../app.config'
import { Token } from './token.model'

export class HttpAuthService extends HttpAuthInterceptor {

  /**
   * Creates an instance of HttpAuth.
   * @param {ConnectionBackend} backend
   * @param {RequestOptions} defaultOptions
   * @param {Storage} storage
   *
   * @memberOf HttpAuth
   */
  constructor (
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    private storage: StorageService ) {
    super( backend, defaultOptions, new InterceptorConfig( { noTokenError: true }) )
  }

  /**
   *
   *
   * @protected
   * @returns <Token>
   *
   * @memberOf HttpAuth
   */
  protected getToken (): Token {
    return this.storage.getAuthToken()
  }

  /**
   *
   *
   * @protected
   * @param {Token} token
   * @returns Token>
   *
   * @memberOf HttpAuth
   */
  protected saveToken ( token: Token ): Token {
    this.storage.setAuthToken( token )
    return token
  }

  /**
   *
   *
   * @protected
   *
   * @memberOf HttpAuthService
   */
  protected removeToken () {
    this.storage.clearAuthToken()
  }

  /**
   *
   *
   * @protected
   * @returns {Observable<Response>}
   *
   * @memberOf HttpAuth
   */
  protected refreshToken (): Observable<Response> {
    return super.get( `${ config.apiEndPoint }/refresh`, {
      headers: new Headers( {
        'noIntercept': 'true',
        'Authorization': `Bearer ${ this.getToken() }`
      })
    })
  }

  /**
   *
   *
   * @protected
   * @param {Request} req
   * @returns {boolean}
   *
   * @memberOf HttpAuthService
   */
  protected shouldIntercept ( req: Request ): boolean {
    return !req.headers.has( 'noIntercept' )
  }

}
