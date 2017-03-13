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
  constructor ( http: Http, private auth: AuthService ) {
    super( http )

    const resource = this.auth.user
      ? `users/${ this.auth.user.id }/payment-accounts`
      : `users/${ this.auth.user.id }/payment-accounts`
      // todo
      // : `companies/${ this.auth.user.loggedInCompany.id }/payment-accounts`

    this.setResource( resource )
  }
}
