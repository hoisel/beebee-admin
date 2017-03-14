import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { ApiBaseService } from '../providers'

@Injectable()
export class CompanyService extends ApiBaseService {

  /**
   * Creates an instance of BusinessService.
   * @param {Http} http
   *
   * @memberOf BusinessService
   */
  constructor( http: Http ) {
    super( http )
    this.setResource( 'companies' )
  }
}
