import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core'

@Component( {
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: [ './schedule.component.css' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ScheduleComponent implements OnInit {

  constructor () { }

  ngOnInit () {
  }

}
