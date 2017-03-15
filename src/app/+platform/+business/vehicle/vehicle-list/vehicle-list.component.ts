import { Component, OnInit } from '@angular/core'

import { VehiclesApiService } from '../../../../core'

@Component( {
  templateUrl: './vehicle-list.component.html',
  styleUrls: [ './vehicle-list.component.css' ]
})
export class VehicleListComponent implements OnInit {

  public vehicles: any[] = []

  /**
   * Creates an instance of VehicleListComponent.
   * @param {EmployeeService} employee
   *
   * @memberOf VehicleListComponent
   */
  constructor( private vehicleService: VehiclesApiService ) { }

  /**
   *
   *
   *
   * @memberOf VehicleListComponent
   */
  public ngOnInit() {
    this.vehicleService.getAll()
      .subscribe( vehicles => this.vehicles = vehicles )
  }
}
