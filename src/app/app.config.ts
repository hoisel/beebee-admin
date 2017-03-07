import { Headers } from '@angular/http'
import { environment } from './../environments/environment'

// Headers padrão
let header: Headers = new Headers()
header.set( 'Accept', 'application/json' )
header.set( 'Content-Type', 'application/json' )

let auth: any = localStorage.getItem( 'auth' ) || null
if ( auth ) {
  auth = JSON.parse( auth )
  header.append( 'Authorization', auth.token )
}

export const API_ENDPOINT = environment.API_ENDPOINT
export const DEFAULT_HEADERS: Headers = header
