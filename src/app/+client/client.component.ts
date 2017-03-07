import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core'

@Component( {
  templateUrl: './client.component.html',
  styleUrls: [ './client.component.css' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
} )
export class ClientComponent implements OnInit {

  constructor () { }

  ngOnInit () {
  }
}
