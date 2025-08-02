import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Charts } from './charts/charts';
import { Tables } from './tables/tables';
import { Forms } from './forms/forms';
import { Grid } from './grid/grid';
import { Components } from './components/components';
import { BlankPage } from './blank-page/blank-page';

export default [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'charts', component: Charts },
  { path: 'tables', component: Tables },
  { path: 'forms', component: Forms },
  { path: 'grid', component: Grid },
  { path: 'components', component: Components },
  { path: 'blank-page', component: BlankPage },
  {
    path: 'contents',
    loadChildren: () => import('./contents/contents.routes'),
  },
  {
    path: 'systems',
    loadChildren: () => import('./systems/systems.routes'),
  },
  {
    path: 'statistics',
    loadChildren: () => import('./statistics/statistics.routes'),
  },
] as Routes;
