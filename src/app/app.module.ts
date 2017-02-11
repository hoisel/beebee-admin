import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TextMaskModule } from 'angular2-text-mask'
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core'

import { AuthService, UserService, ProgressService, SharedDataService } from '../providers'
import { LoggedInGuard } from '../guards'
import { APP_ROUTER_PROVIDERS } from './app.routes'
import { BusinessModule } from './business/business.module'
import { AppComponent } from './app.component'
import { E403Component } from './e403/e403.component'
import { E404Component } from './e404/e404.component'
import { LoginModule } from './login/login.module'
import { RegisterModule } from './register/register.module'
import { PlataformaModule } from './plataforma/plataforma.module'
import { ProfileComponent } from './profile/profile.component'
import { ThemeModule } from './theme/theme.module'
import { WalletModule } from './wallet/wallet.module'
import { BonusComponent } from './bonus/bonus.component'
import { HelpComponent } from './help/help.component'
import { SupportComponent } from './support/support.component'
import { AdminModule } from './admin/admin.module'

@NgModule({
  declarations: [
    AppComponent,
    BonusComponent,
    E403Component,
    E404Component,
    HelpComponent,
    ProfileComponent,
    SupportComponent
  ],
  imports: [
    APP_ROUTER_PROVIDERS,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    TextMaskModule,
    ThemeModule,
    LoginModule,
    RegisterModule,
    WalletModule,
    BusinessModule,
    PlataformaModule,
    AdminModule
  ],
  providers: [
    AuthService,
    LoggedInGuard,
    ProgressService,
    SharedDataService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
