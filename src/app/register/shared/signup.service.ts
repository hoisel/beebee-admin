import { Http, Headers } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { BaseService, config } from '../../core'

@Injectable()
export class SignupService extends BaseService {

  /**
   * Creates an instance of SignupService.
   * @param {Http} http
   *
   * @memberOf SignupService
   */
  constructor ( private http: Http ) { super() }

  /**
   *
   *
   * @param {*} model
   * @returns {Observable<any>}
   *
   * @memberOf SignupService
   */
  public register ( model: any ): Observable<any> {
    return this.http
      .post( `${config.apiEndPoint}/register`, model, { headers: new Headers( { 'noIntercept': 'true' }) } )
      .map( this.extractData )
      .catch( this.handleError )
  }
}
