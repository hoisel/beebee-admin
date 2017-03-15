import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { ApiBaseService } from './api-base.service'

@Injectable()
export class UsersApiService extends ApiBaseService {

  /**
   * Creates an instance of UserService.
   * @param {Http} http
   *
   * @memberOf UserService
   */
  constructor( http: Http ) {
    super( http )
    this.setResource( 'users' )
  }
}
