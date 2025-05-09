import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: '', component: DefaultLayoutComponent, children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
            },
            {
                path: 'buttons',
                loadChildren: () => import('./views/buttons/routes').then((m) => m.routes)
            },
        ]
    }
];
