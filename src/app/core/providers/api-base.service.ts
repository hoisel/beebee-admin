import { API_ENDPOINT } from '../app.config'
import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ApiBaseService {
  resource: string

  constructor ( public http: Http ) {
    //
  }

  public setResource ( resource: string ): void {
    this.resource = `api/v1/${resource}`
  }

  public save ( model: any ): Observable<any> {
    if ( model.id ) {
      return this.update( model )
    }
    return this.create( model )
  }

  public create ( model: any ): Observable<any> {
    return this.http
      .post( `${API_ENDPOINT}/${this.resource}`, model )
      .map( this.extractData )
      .catch( this.handleError )
  }

  public update ( model: any ): Observable<any> {
    return this.http
      .put( `${API_ENDPOINT}/${this.resource}/${model.id}`, model )
      .map( this.extractData )
      .catch( this.handleError )
  }

  public delete ( model: any ): Observable<any> {
    return this.http
      .delete( `${API_ENDPOINT}/${this.resource}/${model.id}` )
      .map( this.extractData )
      .catch( this.handleError )
  }

  public get (): Observable<any[]> {
    return this.http
      .get( `${API_ENDPOINT}/${this.resource}` )
      .map( this.extractData )
      .catch( this.handleError )
  }

  public extractData ( res: Response ) {
    let body = res.json()
    return body
  }

  public handleError ( error: Response | any ) {
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
