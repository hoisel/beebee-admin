import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'

@Component( {
  selector: 'app-e404',
  templateUrl: './e404.component.html',
  styleUrls: [ './e404.component.css' ]
} )
export class E404Component implements OnInit {

  constructor ( private location: Location ) { }

  ngOnInit () {
  }

  back (): void {
    return this.location.back()
  }

}
