import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { BaseService } from '../../providers'
import { config } from '../../app.config'

@Injectable()
export class ApiBaseService extends BaseService {

  protected resource: string
  protected apiEndPoint: string

  /**
   * Creates an instance of ApiBaseService.
   * @param {Http} http
   *
   * @memberOf ApiBaseService
   */
  constructor( public http: Http ) { super() }

  /**
   *
   *
   * @param {string} resource
   *
   * @memberOf ApiBaseService
   */
  public setResource( resource: string ): void {
    this.resource = resource
    this.apiEndPoint = `${ config.apiEndPoint }/${ this.resource }`
  }

  /**
   *
   *
   * @param {*} model
   * @returns {Observable<any>}
   *
   * @memberOf ApiBaseService
   */
  public save( model: any ): Observable<any> {
    if ( model.id ) {
      return this.update( model )
    }
    return this.create( model )
  }

  /**
   *
   *
   * @param {*} model
   * @returns {Observable<any>}
   *
   * @memberOf ApiBaseService
   */
  public create( model: any ): Observable<any> {
    return this.http
      .post( this.apiEndPoint, model )
      .map( this.extractData )
      .catch( this.handleError )
  }

  /**
   *
   *
   * @param {*} model
   * @returns {Observable<any>}
   *
   * @memberOf ApiBaseService
   */
  public update( model: any ): Observable<any> {
    return this.http
      .put( `${ this.apiEndPoint }/${ model.id }`, model )
      .map( this.extractData )
      .catch( this.handleError )
  }

  /**
   *
   *
   * @param {*} model
   * @returns {Observable<any>}
   *
   * @memberOf ApiBaseService
   */
  public delete( model: any ): Observable<any> {
    return this.http
      .delete( `${ this.apiEndPoint }/${ model.id }` )
      .map( this.extractData )
      .catch( this.handleError )
  }

  /**
   *
   *
   * @returns {Observable<any[]>}
   *
   * @memberOf ApiBaseService
   */
  public get( id: string ): Observable<any> {
    return this.http
      .get( `${ this.apiEndPoint }/${ id }` )
      .map( this.extractData )
      .catch( this.handleError )
  }

  /**
   *
   *
   * @returns {Observable<any>}
   *
   * @memberOf ApiBaseService
   */
  public getAll(): Observable<any> {
    return this.http
      .get( `${ this.apiEndPoint }` )
      .map( this.extractData )
      .catch( this.handleError )
  }
}
