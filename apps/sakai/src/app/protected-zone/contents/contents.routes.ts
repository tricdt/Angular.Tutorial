import { Routes } from '@angular/router';
import { Categories } from './categories/categories';

export default [
  { path: 'categories', component: Categories },
  { path: 'knowledge-bases', loadChildren: () => import('./knowledge-bases/knowledge-bases.routes') }
] as Routes;
