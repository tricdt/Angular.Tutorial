import { Routes } from '@angular/router';
import { MonthlyNewKbs } from './monthly-new-kbs/monthly-new-kbs';
import { MonthlyNewMembers } from './monthly-new-members/monthly-new-members';
import { MonthlyNewComments } from './monthly-new-comments/monthly-new-comments';
export default [
  {
    path: '',
    component: MonthlyNewKbs,
  },
  {
    path: 'monthly-new-kbs',
    component: MonthlyNewKbs,
  },
  {
    path: 'monthly-registers',
    component: MonthlyNewMembers,
  },
  {
    path: 'monthly-comments',
    component: MonthlyNewComments,
  },
] as Routes;
