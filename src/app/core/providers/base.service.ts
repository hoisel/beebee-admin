import { Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

export class BaseService {

  constructor() { }

  /**
   *
   *
   * @param {Response} res
   * @returns
   *
   * @memberOf BaseService
   */
  protected extractData( res: Response ) {
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
  protected handleError( error: Response | any ) {
    let errorMsg: string
    if ( error instanceof Response ) {
      const body = error.json() || ''
      errorMsg = body.message || JSON.stringify( body )
    } else {
      errorMsg = error.message ? error.message : error.toString()
    }
    error = { status: error.status, message: errorMsg }
    console.error( error )
    return Observable.throw( error )
  }
}
