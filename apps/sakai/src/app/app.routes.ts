import { Routes } from '@angular/router';
import { AppLayout } from './layout/components/app.layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Documentation } from './pages/documentation/documentation';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./protected-zone/protected-zone.routes')
  }
  // {
  //   path: '',
  //   component: AppLayout,
  //   children: [
  //     { path: '', component: Dashboard },
  //     { path: 'documentation', component: Documentation },
  //     { path: 'pages', loadChildren: () => import('./pages/pages.routes') },
  //   ],
  // },
];
