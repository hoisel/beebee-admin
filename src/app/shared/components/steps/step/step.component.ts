import { Component, OnInit, Input } from '@angular/core'

@Component( {
  // tslint:disable-next-line:component-selector
  selector: 'step',
  templateUrl: './step.component.html',
  styleUrls: [ './step.component.css' ]
})
export class StepComponent implements OnInit {

  @Input() public last: boolean = false
  @Input() public first: boolean = false
  @Input() public active: boolean = false
  @Input() public number: number

  /**
   * Creates an instance of StepComponent.
   *
   * @memberOf StepComponent
   */
  constructor() { }

  /**
   *
   *
   *
   * @memberOf StepComponent
   */
  public ngOnInit() { }
}
