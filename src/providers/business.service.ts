import { Http } from '@angular/http'
import { BaseService } from './base.service'
import { Injectable } from '@angular/core'

@Injectable()
export class BusinessService extends BaseService {

  constructor ( http: Http ) {
    super.setResource( 'business' )
    super( http )
  }
}
