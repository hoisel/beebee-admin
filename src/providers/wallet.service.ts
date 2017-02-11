import { Http } from '@angular/http'
import { BaseService } from './base.service'
import { Injectable } from '@angular/core'

@Injectable()
export class WalletService extends BaseService {

  constructor(http: Http) {
    super.setResource('wallets')
    super(http)
  }
}
