import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SignupComponent } from './signup/signup.component'
import { ConfirmationComponent } from './confirmation/confirmation.component'
import { StartComponent } from './start/start.component'

export const REGISTER_ROUTES: Routes = [
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
        component: StartComponent
    }
]

export const REGISTER_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forChild(REGISTER_ROUTES)
