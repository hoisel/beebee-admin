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
  constructor ( http: Http, private auth: AuthService ) {
    super( http )
    const resource = this.auth.user
      ? `users/${ this.auth.user.id }/receipt-accounts`
      : `users/${ this.auth.user.id }/receipt-accounts`
     // todo
    // : `companies/${ this.auth.user.loggedInCompany.id }/payment-accounts`

    this.setResource( resource )
  }
}
