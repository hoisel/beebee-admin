import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core'

@Component( {
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: [ './vehicle-edit.component.css' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class VehicleEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
