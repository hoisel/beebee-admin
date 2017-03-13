import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared'

import { ScheduleRoutingModule } from './schedule-routing.module'
import { ScheduleComponent } from './schedule.component'
import { ScheduledComponent } from './scheduled/scheduled.component'
import { HistoryComponent } from './history/history.component'
import { InProgressComponent } from './in-progress/in-progress.component'

@NgModule( {
  imports: [
    SharedModule,
    ScheduleRoutingModule
  ],
  declarations: [
    ScheduleComponent,
    ScheduledComponent,
    HistoryComponent,
    InProgressComponent
  ]
})
export class ScheduleModule { }
