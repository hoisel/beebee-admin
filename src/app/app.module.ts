import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AuthModule } from './auth/auth.module'
import { CoreModule } from './core'
import { SharedModule } from './shared'
import { AppComponent } from './app.component'

// components
import { E403Component, E404Component } from './errors'

@NgModule( {
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AuthModule,
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
