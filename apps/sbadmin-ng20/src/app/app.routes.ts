import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Notfound } from '@app/pages/notfound/notfound';
import { ServerError } from '@app/pages/server-error/server-error';
import { AccessDenied } from '@app/pages/auth/access-denied';
import { Login, Signup } from '@app/pages/auth';
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
  { path: 'signup', component: Signup },
  { path: 'notfound', component: Notfound },
  { path: 'access-denied', component: AccessDenied },
  { path: 'error', component: ServerError },
  { path: '**', redirectTo: 'not-found' },
];
