import { Routes } from "@angular/router";

export default [
    {
        path: '',
        loadComponent: () => import('./components/catalogs/catalogs.component').then(m => m.CatalogsComponent),
    }
] as Routes;