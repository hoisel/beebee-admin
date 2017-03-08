import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs/Subscription'

import { UserService, AuthService, ThemeService } from '../../../../core'

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
} )
export class HeaderComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = new Array<Subscription>()
  title: string
  father: string

  constructor (
    private theme: ThemeService,
    public user: UserService,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {
    this.route.url.subscribe( u => {
      this.father = u[ 0 ].path !== 'plataforma' && u[ 0 ].path !== 'admin' ? '' : u[ 0 ].path
    } )
  }

  ngOnInit (): void {
    // Ouvindo alterações no título e alterando no header
    // Subscription do título da página
    this.subscriptions.push(
      this.theme.getTitle$().subscribe( title => {
        this.title = title
      } )
    )
  }

  ngOnDestroy (): void {
    // Unsubscribe em todos os subscriptions deste componente
    this.subscriptions.forEach( sub => sub.unsubscribe() )
  }

  logout (): void {
    return this.auth.logout()
  }

}
