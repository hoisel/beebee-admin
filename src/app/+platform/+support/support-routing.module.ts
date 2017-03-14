import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IsUserGuard } from '../../core'
import { CustomerServiceComponent } from './customer-service/customer-service.component'
import { FaqComponent } from './faq/faq.component'
import { SupportComponent } from './support.component'

const routes: Routes = [ {
  path: '',
  component: SupportComponent,
  canLoad: [ IsUserGuard ],
  children: [
    {
      path: '',
      redirectTo: 'faq',
      pathMatch: 'full'
    },
    {
      path: 'faq',
      component: FaqComponent,
      data: { name: 'Perguntas Frequentes' }
    },
    {
      path: 'atendimento',
      component: CustomerServiceComponent,
      data: { name: 'Atendimento' }
    }
  ]
}]

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
  providers: []
})
export class SupportRoutingModule { }
