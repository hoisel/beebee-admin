import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { ApiBaseService } from './api-base.service'
import { StorageService } from '../../storage'
import { UploadInfo } from './upload-info.model'

@Injectable()
export class AssetsApiService extends ApiBaseService {

  /**
   * Creates an instance of UserService.
   * @param {Http} http
   *
   * @memberOf UserService
   */
  constructor( http: Http, private storage: StorageService ) {
    super( http )
    this.setResource( 'assets' )
  }

  /**
   *
   *
   * @param {string} imageName
   * @returns {Observable<string>}
   *
   * @memberOf AssetsApiService
   */
  public getImageUrl( imageName: string ): Observable<string> {
    return this.http.get( `${ this.apiEndPoint }/${ imageName }` )
      .map( this.extractData )
      .map( resp => resp.url )
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
  public uploadImage( imageFile: File ): Observable<UploadInfo> {
    return Observable.create( observer => {

      const xhr: XMLHttpRequest = new XMLHttpRequest()

      xhr.onreadystatechange = () => {
        if ( xhr.readyState === 4 ) {
          if ( xhr.status === 201 ) {

            const response = JSON.parse( xhr.response )

            const completedUploadInfo: UploadInfo = {
              complete: true,
              progress: 100,
              imageName: response.imageName,
              imageFile: imageFile
            }
            observer.next( completedUploadInfo )
            observer.complete()
          } else {
            observer.error( xhr.response )
          }
        }
      }

      xhr.upload.onprogress = ( event ) => {

        const inProgressUploadInfo: UploadInfo = {
          complete: false,
          progress: Math.round( event.loaded / event.total * 100 ),
          imageFile: imageFile
        }

        observer.next( inProgressUploadInfo )
      }

      xhr.open( 'POST', `${ this.apiEndPoint }`, true )
      xhr.setRequestHeader( 'X-Requested-With', 'XMLHttpRequest' )
      xhr.setRequestHeader( 'Authorization', `Bearer ${ this.storage.getAuthToken() }` )

      const formData: FormData = new FormData()
      formData.append( 'image', imageFile, imageFile.name )
      xhr.send( formData )
    })
      .catch( this.handleError )
  }
}
