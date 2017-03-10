import { Response, Headers, RequestOptions, ConnectionBackend } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { StorageService } from '../store'
import { HttpAuthInterceptor, InterceptorConfig } from './http-auth-interceptor.service'

export class HttpAuthService extends HttpAuthInterceptor {

  // In production code do not put your API keys here make sure they are obtained some other way.
  // perhaps a env variables.
  ///const API_ACCESS_KEY = '...'
  ///const API_ACCESS_SECRET = '...'

  /**
   * Creates an instance of HttpAuth.
   * @param {ConnectionBackend} backend
   * @param {RequestOptions} defaultOptions
   * @param {Storage} storage
   *
   * @memberOf HttpAuth
   */
  constructor ( backend: ConnectionBackend, defaultOptions: RequestOptions, private storage: StorageService ) {
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
    const user = this.storage.getItem( 'user' )
    return user ? user.token : undefined
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
    this.storage.updateItem( 'user', { token: token })
    return token
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
    return super.post( 'http://www.data.com/api/authenticate', {
      // access_key_id: API_ACCESS_KEY,
      // access_key_secret: API_ACCESS_SECRET
    }, { headers: new Headers({ 'noIntercept': 'true' }) }  )
  }
}
