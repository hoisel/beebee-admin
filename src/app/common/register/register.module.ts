import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared'
import { RegisterRoutingModule } from './register-routing.module'

import { RegisterComponent } from './register.component'
import { SignupComponent } from './signup/signup.component'
import { ConfirmationComponent } from './confirmation/confirmation.component'
import { StartComponent } from './start/start.component'

@NgModule({
  imports: [
    SharedModule,
    RegisterRoutingModule
  ],
  declarations: [
    RegisterComponent,
    SignupComponent,
    ConfirmationComponent,
    StartComponent
  ]
})
export class RegisterModule { }
