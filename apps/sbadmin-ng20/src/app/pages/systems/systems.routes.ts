import { Routes } from '@angular/router';
import { Users } from './users/users';
import { Functions } from './functions/functions';
import { Roles } from './roles/roles';
import { Permissions } from './permissions/permissions';

export default [
  {
    path: '',
    component: Users,
  },
  {
    path: 'users',
    component: Users,
  },
  {
    path: 'functions',
    component: Functions,
  },
  {
    path: 'roles',
    component: Roles,
  },
  {
    path: 'permissions',
    component: Permissions,
  },
] as Routes;
