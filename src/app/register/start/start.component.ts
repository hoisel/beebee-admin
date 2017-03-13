import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component( {
  templateUrl: './start.component.html',
  styleUrls: [ './start.component.css' ]
})
export class StartComponent implements OnInit {

  /**
   * Creates an instance of StartComponent.
   * @param {Title} title
   * @param {Router} router
   *
   * @memberOf StartComponent
   */
  constructor ( public title: Title, public router: Router ) { }

  /**
   *
   *
   *
   * @memberOf StartComponent
   */
  public ngOnInit () {
    this.title.setTitle( 'Começar | BeeBee' )
  }
}

