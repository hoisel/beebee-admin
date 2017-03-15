import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { ApiBaseService } from './api-base.service'
import { StorageService } from '../../storage'

@Injectable()
export class UsersApiService extends ApiBaseService {

  /**
   * Creates an instance of UserService.
   * @param {Http} http
   *
   * @memberOf UserService
   */
  constructor ( http: Http, private storage: StorageService ) {
    super( http )
    this.setResource( 'users' )
  }



  /**
   *
   *
   * @param {string} id
   * @param {string} type
   * @returns {Observable<any>}
   *
   * @memberOf ApiBaseService
   */
  public getAvatarImage ( id: string ): Observable<any> {
    return this.getImage( id, 'avatar' )
  }

  public getDriverLicenseImage ( id: string ): Observable<any> {
    return this.getImage( id, 'driverLicense' )
  }

  public getImage ( id: string, imageName: string ): Observable<any> {
    return this.http.get( `${ this.apiEndPoint }/${ id }/assets/${ imageName }.jpg` )
      .map( this.extractData )
      .catch( this.handleError )
  }

  /**
   *
   *
   * @param {string} id
   * @param {string} type
   * @param {string[]} params
   * @param {File[]} files
   * @returns {Observable<any>}
   *
   * @memberOf UsersApiService
   */
  public uploadImage ( id: string, imageName: string, imageFile: File ): Observable<any> {
    return Observable.create( observer => {

      const xhr: XMLHttpRequest = new XMLHttpRequest()

      xhr.onreadystatechange = () => {
        if ( xhr.readyState === 4 ) {
          if ( xhr.status === 200 ) {
            observer.next( JSON.parse( xhr.response ) )
            observer.complete()
          } else {
            observer.error( xhr.response )
          }
        }
      }

      xhr.upload.onprogress = ( event ) => {
        const progress = Math.round( event.loaded / event.total * 100 )
        observer.next( progress )
      }

      xhr.open( 'POST', `${ this.apiEndPoint }/${ id }/assets/${ imageName }`, true )
      xhr.setRequestHeader( 'X-Requested-With', 'XMLHttpRequest' )
      xhr.setRequestHeader( 'Authorization', `Bearer ${ this.storage.getAuthToken() }` )

      const formData: FormData = new FormData()
      formData.append( 'image', imageFile, imageFile.name )
      xhr.send( formData )
    })
      .catch( this.handleError )
  }
}
