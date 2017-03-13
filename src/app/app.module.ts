import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AuthModule } from './common/auth/auth.module'
import { RegisterModule } from './common/register/register.module'
import { CoreModule } from './core'
import { SharedModule } from './shared'
import { AppComponent } from './app.component'

// components
import { E403Component, E404Component } from './common/errors'

@NgModule( {
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AuthModule,
    RegisterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    E403Component,
    E404Component
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
