import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { BaseService } from './base.service'
import { Address } from '../model'

@Injectable()
export class CepService extends BaseService {

  public data: any

  /**
   * Creates an instance of CepService.
   * @param {Http} http
   *
   * @memberOf CepService
   */
  constructor ( private http: Http ) {
    super()
    this.data = null
  }

  /**
   *
   *
   * @param {string} cep
   * @returns {Observable<any>}
   *
   * @memberOf CepService
   */
  public getAddress ( zipcode: string ): Observable<Address> {
    let strippedZipcode = zipcode.replace( /\D/g, '' )
    if ( !strippedZipcode ) {
      return Observable.throw( 'CEP inválido para consulta' )
    }
    return this.http
      .get( `https://viacep.com.br/ws/${ strippedZipcode }/json/`, new RequestOptions( { headers: new Headers( { 'Content-Type': 'application/json', 'noIntercept': 'true' }) }) )
      .map( this.extractData )
      .map( address => {
        return address.erro ? address : {
          address: address.logradouro,
          zipcode: zipcode,
          city: address.localidade,
          district: address.bairro,
          complement: address.complemento,
          state: address.uf
        } as Address
      })
      .catch( this.handleError )
  }
}
