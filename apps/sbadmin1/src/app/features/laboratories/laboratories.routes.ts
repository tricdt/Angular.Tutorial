import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => import('./components/laboratories/laboratories.component').then(m => m.LaboratoriesComponent),
    }
] as Routes;