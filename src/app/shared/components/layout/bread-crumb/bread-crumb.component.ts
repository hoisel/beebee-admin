import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'
import { Subscription } from 'rxjs/Subscription'

interface IRouteBc {
  url: string
  item: string
}

@Component( {
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: [ './bread-crumb.component.css' ]
} )
export class BreadCrumbComponent implements OnInit, OnDestroy {
  public stack: IRouteBc[] = []
  private subscription: Subscription

  constructor ( private router: Router, private route: ActivatedRoute ) { }

  ngOnInit () {
    this.subscription = this.router.events
      .filter( event => event instanceof NavigationEnd )
      .subscribe( event => {
        let currentRoute = this.route.root
        let urlMaped: any = []

        while ( currentRoute.children[ 0 ] !== undefined ) {
          currentRoute = currentRoute.children[ 0 ]
          const path = currentRoute.snapshot.url[ 0 ] ? currentRoute.snapshot.url[ 0 ].path : ''
          urlMaped.push( {
            name: currentRoute.snapshot.data[ 'name' ],
            path: path
          } )
        }

        this.stack = urlMaped.map(( r, index ) => {
          return {
            item: r.name ? r.name : r.path.substr( 0, 1 ).toUpperCase() + r.path.substr( 1 ),
            url: `/${urlMaped.map( u => u.path ).filter(( u, i ) => i <= index ).join( '/' )}`.toLowerCase()
          }
        } )
      } )
  }

  ngOnDestroy () {
    this.subscription.unsubscribe()
  }
}
