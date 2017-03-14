import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { ApiBaseService } from '../providers'
import { AuthService } from '../auth'

@Injectable()
export class ReceiptAccountsService extends ApiBaseService {

  /**
   * Creates an instance of UserService.
   * @param {Http} http
   *
   * @memberOf UserService
   */
  constructor( http: Http, private auth: AuthService ) {
    super( http )
    this.auth.userProfile$.subscribe( userProfile => this.setResource( `${ userProfile.resourceName }/${ userProfile.id }/receipt-accounts` ) )
  }
}
