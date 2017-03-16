import { Pipe, PipeTransform } from '@angular/core'

@Pipe( { name: 'styleUrl' })
export class StyleUrlPipe implements PipeTransform {

  /**
   *
   *
   * @param {any} url
   * @returns
   *
   * @memberOf StyleUrl
   */
  public transform ( url ) {
    return `url('${ url }')`
  }
}
