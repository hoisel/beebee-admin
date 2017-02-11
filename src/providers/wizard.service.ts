import { Injectable } from '@angular/core'
import { AuthService } from './auth.service'
import { Observable, Subject } from 'rxjs'

@Injectable()
export class WizardService {

  private _active: string = null
  private _active$: Subject<string> = new Subject<string>()
  constructor(private auth: AuthService) { }

  get active$(): Observable<string> {
    return this._active$.asObservable()
  }
  get active(): string {
    return this._active
  }
  set active(active: string) {
    this._active = active
    this._active$.next(active)
  }

  stepComplete(step: string): boolean {
    switch (step) {
      case 'user':
      case 'address':
        return this.auth.isLoggedIn
    }
    return false
  }

}
