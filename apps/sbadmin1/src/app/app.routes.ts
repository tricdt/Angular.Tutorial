import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'catalogs',
        loadChildren: () => import('./features/catalogs/catalog.routes'),
      },
      {
        path: 'laboratories',
        loadChildren: () =>
          import('./features/laboratories/laboratories.routes'),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
