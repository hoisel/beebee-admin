import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { AuthService } from '../auth'
import { ApiBaseService } from '../providers'

@Injectable()
export class PaymentAccountsService extends ApiBaseService {

  /**
   * Creates an instance of UserService.
   * @param {Http} http
   *
   * @memberOf UserService
   */
  constructor( http: Http, private auth: AuthService ) {
    super( http )
    this.auth.userProfile$.subscribe( userProfile => this.setResource( `${ userProfile.resourceName }/${ userProfile.id }/payment-accounts` ) )
  }
}
