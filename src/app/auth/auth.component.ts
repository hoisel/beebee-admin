import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core'

@Component( {
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: [ './auth.component.css' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
} )
export class AuthComponent implements OnInit {

  constructor () { }

  ngOnInit () {
  }

}
