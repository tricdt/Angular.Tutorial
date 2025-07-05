import { Routes } from "@angular/router";

export default [
    {
        path: 'accordion',
        loadComponent: () => import('./component/accordion/accordion.component').then(m => m.AccordionComponent),
    },
    {
        path:'carousel',
        loadComponent: () => import('./component/carousel/carousel.component').then(m => m.CarouselComponent),
    },
    {
        path:'alert',
        loadComponent: () => import('./component/alert/alert.component').then(m => m.AlertComponent),
        children: [
            {
                path:'primary',
                loadComponent: () => import('./component/alert/components').then(m => m.PrimaryComponent),
            },
            {
                path:'secondary',
                loadComponent: () => import('./component/alert/components').then(m => m.SecondaryComponent),
            }
        ]
    }
] as Routes