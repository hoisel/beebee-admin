import { Response, Request, Headers, RequestOptions, ConnectionBackend } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { InterceptorConfig } from './interceptor.config'
import { HttpAuthInterceptor } from './http-auth-interceptor.service'
import { StorageService } from '../storage'
import { config } from '../app.config'

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
   * @returns <string>
   *
   * @memberOf HttpAuth
   */
  protected getToken (): string {
    return this.storage.getAuthToken()
  }

  /**
   *
   *
   * @protected
   * @param {string} token
   * @returns string>
   *
   * @memberOf HttpAuth
   */
  protected saveToken ( token: string ): string {
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
