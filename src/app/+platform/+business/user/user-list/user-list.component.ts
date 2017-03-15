import { Component, OnInit } from '@angular/core'

import { DriverApiService } from '../../../../core'

@Component( {
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.css' ]
})
export class UserListComponent implements OnInit {

  public users: any[] = []

  /**
   * Creates an instance of UserListComponent.
   * @param {EmployeeService} employee
   *
   * @memberOf UserListComponent
   */
  constructor( private employeeService: DriverApiService ) { }

  /**
   *
   *
   *
   * @memberOf UserListComponent
   */
  public ngOnInit() {
    this.employeeService.getAll()
      .subscribe( users => this.users = users )
  }
}
