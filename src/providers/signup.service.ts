import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { BaseService } from './base.service'
import { API_ENDPOINT } from './../app/app.config'

@Injectable()
export class SignupService extends BaseService {

  constructor ( public http: Http ) {
    super( http )
  }

  public register ( model: any ): Observable<any> {
    return this.http
      .post( `${API_ENDPOINT}/signup`, model )
      .map( this.extractData )
      .catch( this.handleError )
  }
}
