import 'swiper'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core'
import { environment } from './environments/environment'
import { AppModule } from './app/app.module'

import 'rxjs/add/observable/throw'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/share'

if ( environment.production ) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule( AppModule )
