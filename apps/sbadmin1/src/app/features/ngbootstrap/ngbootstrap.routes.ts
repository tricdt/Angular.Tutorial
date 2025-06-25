import { Routes } from "@angular/router";

export default [
    {
        path: 'accordion',
        loadComponent: () => import('./component/accordion/accordion.component').then(m => m.AccordionComponent),
    },
    {
        path:'carousel',
        loadComponent: () => import('./component/carousel/carousel.component').then(m => m.CarouselComponent),
    }
] as Routes