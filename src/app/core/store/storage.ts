import { Injectable } from '@angular/core'

@Injectable()
export class NStorage {

  constructor () {
    console.log( 'aaaaaaaa' )
  }

  /**
   *
   *
   * @param {any} k
   * @param {any} value
   *
   * @memberOf Store
   */
  public setItem ( key: string, value: any ) {
    // localStorage.setItem( key, this.convertValue( value ) )
  }

  /**
   *
   *
   * @param {any} k
   * @returns
   *
   * @memberOf Store
   */
  public getItem ( key: string ) {
    // let value = typeof key !== 'number' ? localStorage.getItem( key ) : localStorage.getItem( localStorage.key( key ) )
    // return this.unconvertValue( value )
    return null
  }

  /**
   *
   *
   * @param {any} k
   *
   * @memberOf Store
   */
  public removeItem ( key: string ) {
    // localStorage.removeItem( key )
  }

  /**
   *
   *
   * @param {string} key
   * @param {*} updates
   *
   * @memberOf Storage
   */
  public updateItem ( key: string, updates: any ) {
    // const obj = this.getItem( key )
    // obj && this.setItem( key, Object.assign( obj, updates ) )
  }

  /**
   *
   *
   *
   * @memberOf Store
   */
  public clear () {
    // localStorage.clear()
  }

  /**
   *
   *
   * @private
   * @param {any} value
   * @returns
   *
   * @memberOf Store
   */
  // private convertValue ( value: any ): any {
  //   return typeof value !== 'object' ? value : JSON.stringify( value )
  // }

  // /**
  //  *
  //  *
  //  * @private
  //  * @param {any} value
  //  * @returns
  //  *
  //  * @memberOf Store
  //  */
  // private unconvertValue ( value: string ) {
  //   if ( value !== null ) {
  //     if ( value.indexOf( '{' ) === 0 || value.indexOf( '[' ) === 0 ) {
  //       return JSON.parse( value )
  //     } else {
  //       return null
  //     }
  //   }
  // }
}
