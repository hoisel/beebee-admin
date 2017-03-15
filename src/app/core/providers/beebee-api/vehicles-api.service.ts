import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { AuthService } from '../../auth'
import { ApiBaseService } from './api-base.service'

@Injectable()
export class VehiclesApiService extends ApiBaseService {

  /**
   * Creates an instance of VehicleService.
   * @param {Http} http
   *
   * @memberOf VehicleService
   */
  constructor( http: Http, private auth: AuthService ) {
    super( http )
    this.auth.userProfile$.subscribe( userProfile => this.setResource( `companies/${ userProfile.id }/vehicles` ) )
  }
}
