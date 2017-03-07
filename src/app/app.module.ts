import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core'
import { SharedModule } from './shared'

import {
  SigninComponent,
  ForgotPasswordComponent,
  NewPasswordLinkComponent,
  NewPasswordChangeComponent,
  NewPasswordOkComponent
} from './login'

@NgModule( {
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SigninComponent,
    ForgotPasswordComponent,
    NewPasswordLinkComponent,
    NewPasswordChangeComponent,
    NewPasswordOkComponent
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
