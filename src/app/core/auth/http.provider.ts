import { RequestOptions, ConnectionBackend, Http, XHRBackend } from '@angular/http'
import { HttpAuthService } from './http-auth.service'
import { NStorage } from '../store/storage'

/**
 *
 *
 * @export
 * @param {ConnectionBackend} backend
 * @param {RequestOptions} defaultOptions
 * @param {Storage} storage
 * @returns
 */
export function getHttpAuth ( backend: ConnectionBackend, defaultOptions: RequestOptions, storage: NStorage ) {
  return new HttpAuthService( backend, defaultOptions, storage )
}

export const httpProvider = {
  provide: Http,
  useFactory: getHttpAuth,
  deps: [ XHRBackend, RequestOptions, NStorage ]
}
