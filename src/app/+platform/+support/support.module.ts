import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared'

import { SupportRoutingModule } from './support-routing.module'

import { CustomerServiceComponent } from './customer-service/customer-service.component'
import { FaqComponent } from './faq/faq.component'
import { SupportComponent } from './support.component'

@NgModule( {
  imports: [
    SharedModule,
    SupportRoutingModule
  ],
  declarations: [
    CustomerServiceComponent,
    FaqComponent,
    SupportComponent
  ]
})
export class SupportModule { }
