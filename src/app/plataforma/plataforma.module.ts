import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ThemeModule } from '../theme/theme.module'
import { PlataformaComponent } from './plataforma.component'
import { FazerFreteComponent } from './fazer-frete/fazer-frete.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ThemeModule
  ],
  declarations: [PlataformaComponent, FazerFreteComponent]
})
export class PlataformaModule { }
