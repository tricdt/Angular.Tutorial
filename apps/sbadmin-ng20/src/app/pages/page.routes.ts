import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

export default [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
] as Routes;
