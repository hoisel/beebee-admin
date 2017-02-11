import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FazerFreteComponent } from './fazer-frete/fazer-frete.component'

export const PLATAFORMA_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        // path: 'fazer-frete',
        path: 'dashboard',
        component: FazerFreteComponent
    }
]

export const PLATAFORMA_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forChild(PLATAFORMA_ROUTES)
