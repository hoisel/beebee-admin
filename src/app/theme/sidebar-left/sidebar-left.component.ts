import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ApiService } from '../../../providers'
import { IMenus, TypeUser } from '../../../interfaces'
import { Subscription } from 'rxjs'
import { ThemeService } from '../theme.service'

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.css']
})
export class SidebarLeftComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = Array<Subscription>()
  menus: IMenus = {
    headers: [],
    menus: []
  }
  father: string

  constructor(
    private api: ApiService,
    private router: Router,
    private theme: ThemeService,
    private route: ActivatedRoute
  ) { }

  navigate(url: string): void {
    this.router.navigate(url.split('/'))
    this.updateActive(url)
  }

  ngOnInit(): void {
    let from: TypeUser
    this.route.url.subscribe(u => {
      this.father = u[0].path !== 'plataforma' && u[0].path !== 'admin' ? '' : u[0].path
      switch (u[0].path) {
        case 'admin':
          from = TypeUser.Administrator
          break
        default:
          from = TypeUser.Client
          break
      }

      this.subscriptions.push(
        this.api.menus(from).subscribe(menus => {
          this.menus = menus
          this.updateActive()
        })
      )
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.map(sub => sub.unsubscribe())
  }

  private updateActive(url?: string): void {
    if (url) {
      this.menus.menus.map(menu => {
        menu.active = window.location.pathname.indexOf(url) && url === menu.href
        if (menu.active) {
          this.theme.setTitle(menu.title)
        }
      })
      return
    }
    this.menus.menus.map(menu => {
      menu.active = window.location.pathname.indexOf(menu.href) !== -1
      if (menu.active) {
        this.theme.setTitle(menu.title)
      }
    })
  }

}
