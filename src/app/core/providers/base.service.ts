import { Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

export class BaseService {

  constructor () { }

  /**
   *
   *
   * @param {Response} res
   * @returns
   *
   * @memberOf BaseService
   */
  protected extractData ( res: Response ) {
    let body = res.json()
    return body
  }

  /**
   *
   *
   * @param {(Response | any)} error
   * @returns
   *
   * @memberOf BaseService
   */
  protected handleError ( error: Response | any ) {
    let errMsg: string
    if ( error instanceof Response ) {
      const body = error.json() || ''
      errMsg = body.message || JSON.stringify( body )
    } else {
      errMsg = error.message ? error.message : error.toString()
    }
    return Observable.throw( errMsg )
  }
}
