import { Routes } from '@angular/router';
import { KnowledgeBases } from './knowledge-bases/knowledge-bases';
import { KnowledgeBasesDetail } from './knowledge-bases/knowledge-bases-detail';
import { Comments } from './knowledge-bases/comments';
import { Reports } from './knowledge-bases/reports';
import { Categories } from './categories/categories';

export default [
  { path: '', component: KnowledgeBases },
  { path: 'knowledge-bases', component: KnowledgeBases },
  {
    path: 'knowledge-bases-detail/:id',
    component: KnowledgeBasesDetail,
  },
  {
    path: 'knowledge-bases/:knowledgeBaseId/comments',
    component: Comments,
  },
  {
    path: 'knowledge-bases/comments',
    component: Comments,
  },
  {
    path: 'knowledge-bases/:knowledgeBaseId/reports',
    component: Reports,
  },
  {
    path: 'knowledge-bases/reports',
    component: Reports,
  },
  {
    path: 'categories',
    component: Categories,
  },
] as Routes;
