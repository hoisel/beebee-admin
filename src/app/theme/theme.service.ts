import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable()
export class ThemeService {
  static title$: Subject<string> = new Subject<string>()
  static setTitle ( title: string ): void { ThemeService.title$.next( title ) }
  constructor () { }

  getTitle$ (): Subject<string> { return ThemeService.title$ }
  setTitle ( title: string ): void { ThemeService.setTitle( title ) }

}
