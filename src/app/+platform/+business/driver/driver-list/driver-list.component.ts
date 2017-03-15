import { Component, OnInit } from '@angular/core'

import { DriverApiService } from '../../../../core'

@Component( {
  templateUrl: './driver-list.component.html',
  styleUrls: [ './driver-list.component.css' ]
})
export class DriverListComponent implements OnInit {

  public drivers: any[] = []

  /**
   * Creates an instance of DriverListComponent.
   * @param {EmployeeService} employee
   *
   * @memberOf DriverListComponent
   */
  constructor( private driverService: DriverApiService ) { }

  /**
   *
   *
   *
   * @memberOf DriverListComponent
   */
  public ngOnInit() {
    this.driverService.getAll()
      .subscribe( drivers => this.drivers = drivers )
  }
}
