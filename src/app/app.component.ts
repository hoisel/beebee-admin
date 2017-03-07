import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core'

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
} )
export class AppComponent implements OnInit {

  constructor () { }

  ngOnInit () {
  }

}
