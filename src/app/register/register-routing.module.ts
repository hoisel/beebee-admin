import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoggedInGuard } from '../core'

import { RegisterComponent } from './register.component'
import { SignupComponent } from './signup/signup.component'
import { ConfirmationComponent } from './confirmation/confirmation.component'
import { StartComponent } from './start/start.component'

const routes: Routes = [ {
  path: 'cadastro',
  component: RegisterComponent,
  children: [
    {
      path: '',
      component: SignupComponent
    },
    {
      path: 'confirmacao',
      component: ConfirmationComponent
    },
    {
      path: 'comecar',
      canActivate: [ LoggedInGuard ],
      component: StartComponent
    }]
}]

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
})
export class RegisterRoutingModule { }
