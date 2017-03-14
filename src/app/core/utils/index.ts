export * from './masks/masks'
export * from './states/states.data'

/**
 *
 *
 * @private
 * @param {*} obj
 * @param {string[]} props
 * @returns {*}
 *
 * @memberOf ProfileComponent
 */
export function pick( obj: any, props: string[] ): any {
  return Object.keys( obj )
    .filter(( key ) => props.indexOf( key ) >= 0 )
    .reduce(( newObj, key ) => Object.assign( newObj, { [ key ]: obj[ key ] }), {})
}
