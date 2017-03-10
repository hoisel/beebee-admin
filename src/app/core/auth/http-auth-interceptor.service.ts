import { Http, Request, RequestOptions, RequestOptionsArgs, Response, ConnectionBackend, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { InterceptorConfig } from './interceptor.config'
/**
 *
 *
 * @export
 * @abstract
 * @class HttpAuthInterceptor
 * @extends {Http}
 */
export abstract class HttpAuthInterceptor extends Http {

  private origRequest: Request

  /**
   * Creates an instance of HttpAuthInterceptor.
   * @param {ConnectionBackend} backend
   * @param {RequestOptions} defaultOptions
   * @param {InterceptorConfig} config
   *
   * @memberOf HttpAuthInterceptor
   */
  constructor ( backend: ConnectionBackend, defaultOptions: RequestOptions, private inteceptorConfig: InterceptorConfig ) {
    super( backend, defaultOptions )
  }

  /**
   *
   *
   * @private
   * @param {RequestOptionsArgs} [options]
   * @returns {RequestOptionsArgs}
   *
   * @memberOf HttpAuthInterceptor
   */
  private getRequestOptionArgs ( options?: RequestOptionsArgs ): RequestOptionsArgs {
    if ( options == null ) {
      options = new RequestOptions()
    }
    if ( options.headers == null ) {
      options.headers = new Headers()
    }
    options.headers.append( 'Content-Type', 'application/json' )
    return options
  }

  /**
   *
   *
   * @protected
   * @param {Request} req
   * @param {*} token
   * @returns {Observable<Response>}
   *
   * @memberOf HttpAuthInterceptor
   */
  protected requestWithToken ( req: Request, token: any ): Observable<Response> {
    this.origRequest = req
    if ( !this.inteceptorConfig.noTokenError && !token ) {
      return Observable.throw( new Error( 'No authorization token given' ) )
    } else {
      req.headers.set( this.inteceptorConfig.headerName, `${ this.inteceptorConfig.headerPrefix } ${ token }` )
    }

    return super.request( req )
  }

  /**
   *
   *
   * @param {(string | Request)} url
   * @param {RequestOptionsArgs} [options]
   * @returns {Observable<Response>}
   *
   * @memberOf HttpAuthInterceptor
   */
  request ( url: string | Request, options?: RequestOptionsArgs ): Observable<Response> {
    if ( typeof url === 'string' ) {
      return this.get( url, options )
    }

    const req = url as Request

    if ( !this.shouldIntercept( req ) ) {
      return super.request( req )
    }

    return this.intercept( this.requestWithToken( req, this.getToken() ) )
  }

  /**
   *
   *
   * @param {string} url
   * @param {RequestOptionsArgs} [options]
   * @param {boolean} [noIntercept]
   * @returns {Observable<Response>}
   *
   * @memberOf HttpAuthInterceptor
   */
  get ( url: string, options?: RequestOptionsArgs ): Observable<Response> {
    return super.get( url, options )
  }

  /**
   *
   *
   * @param {string} url
   * @param {*} body
   * @param {RequestOptionsArgs} [options]
   * @param {boolean} [noIntercept]
   * @returns {Observable<Response>}
   *
   * @memberOf HttpAuthInterceptor
   */
  post ( url: string, body: any, options?: RequestOptionsArgs ): Observable<Response> {
    return super.post( url, body, this.getRequestOptionArgs( options ) )
  }

  /**
   *
   *
   * @param {string} url
   * @param {*} body
   * @param {RequestOptionsArgs} [options]
   * @param {boolean} [noIntercept]
   * @returns {Observable<Response>}
   *
   * @memberOf HttpAuthInterceptor
   */
  put ( url: string, body: any, options?: RequestOptionsArgs ): Observable<Response> {
    return super.put( url, body, this.getRequestOptionArgs( options ) )
  }

  /**
   *
   *
   * @param {string} url
   * @param {RequestOptionsArgs} [options]
   * @param {boolean} [noIntercept]
   * @returns {Observable<Response>}
   *
   * @memberOf HttpAuthInterceptor
   */
  delete ( url: string, options?: RequestOptionsArgs ): Observable<Response> {
    return super.delete( url, options )
  }

  /**
   *
   *
   * @protected
   * @param {Observable<Response>} observable
   * @returns {Observable<Response>}
   *
   * @memberOf HttpAuthInterceptor
   */
  protected intercept ( observable: Observable<Response> ): Observable<Response> {
    return observable.catch(( resp: Response, source: any ) => {

      let body = resp.json()

      if ( resp.status === 401 && body.error === 'token_expired' ) {
        return this.refreshToken()
          .mergeMap(( resp: Response ) => this.saveNewToken( resp ) )
          .mergeMap(( token: string ) => this.retryOriginalRequest( this.origRequest, token ) )
      }

      if ( resp.status === 400 && body.error === 'token_invalid' ) {
        this.removeToken()
        return Observable.throw( { message: 'token inválido' } )
      }

      return Observable.throw( resp )
    })
  }

  /**
   *
   *
   * @protected
   * @param {Request} req
   * @param {string} token
   * @returns
   *
   * @memberOf HttpAuthInterceptor
   */
  protected retryOriginalRequest ( req: Request, token: string ): Observable<Response> {
    return this.requestWithToken( this.origRequest, token )
  }

  /**
   *
   *
   * @protected
   * @param {Response} res
   * @returns {Observable<string>}
   *
   * @memberOf HttpAuthInterceptor
   */
  protected saveNewToken ( res: Response ): Observable<string> {
    let data = res.json()
    if ( data.refreshToken ) {
      return Observable.of( this.saveToken( data.refreshToken ) )
    } else {
      return Observable.throw( new Error( 'Não foi possível fazer o refresh do token' ) )
    }
  }

  protected abstract shouldIntercept ( req: Request ): boolean

  protected abstract getToken (): string

  protected abstract removeToken (): void

  protected abstract saveToken ( token: string ): string

  protected abstract refreshToken (): Observable<Response>
}
