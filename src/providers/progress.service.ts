import { Injectable } from '@angular/core'
import * as NProgress from 'nprogress'

@Injectable()
export class ProgressService {

  constructor () {
    this.configure()
  }

  start (): void {
    NProgress.start()
  }

  finish (): void {
    NProgress.done()
  }

  increment (): void {
    NProgress.inc()
  }

  /**
   * Configuração NProgress lib
   */
  private configure (): void {
    NProgress.configure( {
      // template: `
      // <div class="bar" role="bar">
      //   <div class="peg"></div>
      // </div>
      // `
      showSpinner: false,
      speed: 500
    } )
  }

}
