import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Login } from '@app/pages/auth/login/login';
export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/page.routes').then((m) => m.default),
      },
    ],
  },
  {
    path: 'login',
    component: Login,
  },
];
