import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

import { Menu, UserRole } from '../model'
import { HttpBaseService } from './http-base.service'
import { DEFAULT_HEADERS } from '../app.config'

@Injectable()
export class UiStateStoreService extends HttpBaseService {

  private menu$: BehaviorSubject<Menu>

  /**
   *
   *
   * @readonly
   * @type {Observable<Menu>}
   * @memberOf BaseService
   */
  get menu (): Observable<Menu> {
    return this.menu$.asObservable()
  }

  /**
   * Creates an instance of BaseService.
   * @param {ApiService} api
   *
   * @memberOf BaseService
   */
  constructor ( public http: Http ) {
    super()
    this.menu$ = new BehaviorSubject<Menu>( { items: [], header: {} } as Menu )
  }

  /**
   *
   *
   *
   * @memberOf BaseService
   */
  public loadMenu ( userRole: UserRole ): void {
    this.getMenu( userRole ).subscribe( menu => this.menu$.next( menu ) )
  }

  /**
   *
   *
   * @private
   * @param {UserRole} type
   * @returns {Observable<Menu>}
   *
   * @memberOf UiStateStoreService
   */
  private getMenu ( userRole: UserRole ): Observable<Menu> {
    const from = userRole === UserRole.Administrator ? 'admin' : 'plataforma'

    return this.http.get( `src/app/core/mocks/menu/${from}.json`, DEFAULT_HEADERS )
      .share()
      .map( this.extractData )
      .catch( this.handleError )
  }
}
