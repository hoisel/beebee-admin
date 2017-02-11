import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TextMaskModule } from 'angular2-text-mask'
import { ThemeModule } from '../theme/theme.module'
import { WalletComponent } from './wallet.component'
import { WalletSummaryComponent } from './index/summary.component'
import { WalletReceiveIndexComponent } from './index/receive.component'
import { WalletReceiveFormsComponent } from './forms/receive.component'
import { WalletPayIndexComponent } from './index/pay.component'
import { WalletPayFormsComponent } from './forms/pay.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ThemeModule,
    TextMaskModule
  ],
  declarations: [
    WalletComponent,
    WalletSummaryComponent,
    WalletReceiveIndexComponent,
    WalletReceiveFormsComponent,
    WalletPayIndexComponent,
    WalletPayFormsComponent
  ]
})
export class WalletModule { }
