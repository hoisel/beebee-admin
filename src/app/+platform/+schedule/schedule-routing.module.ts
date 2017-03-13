import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IsUserGuard } from '../../core'
import { ScheduleComponent } from './schedule.component'
import { ScheduledComponent } from './scheduled/scheduled.component'
import { HistoryComponent } from './history/history.component'
import { InProgressComponent } from './in-progress/in-progress.component'


const routes: Routes = [ {
  path: '',
  component: ScheduleComponent,
  canLoad: [ IsUserGuard ],
  children: [
    {
      path: '',
      redirectTo: 'em-andamento',
      pathMatch: 'full'
    },
    {
      path: 'em-andamento',
      component: InProgressComponent,
      data: { name: 'Em andamento' }
    },
    {
      path: 'historico',
      component: HistoryComponent,
      data: { name: 'Histórico' }
    },
    {
      path: 'agendado',
      component: ScheduledComponent,
      data: { name: 'Agendados' }
    }
  ]
}]

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
})
export class ScheduleRoutingModule { }
