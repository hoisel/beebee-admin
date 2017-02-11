import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TextMaskModule } from 'angular2-text-mask'
import { RegisterComponent } from './register.component'
import { SignupComponent } from './signup/signup.component'
import { ConfirmationComponent } from './confirmation/confirmation.component'
import { StartComponent } from './start/start.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TextMaskModule
  ],
  declarations: [
    RegisterComponent,
    SignupComponent,
    ConfirmationComponent,
    StartComponent
  ]
})
export class RegisterModule { }
