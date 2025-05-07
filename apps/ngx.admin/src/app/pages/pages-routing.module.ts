import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ECommerceComponent } from "./e-commerce/e-commerce.component";

export const routes: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: ECommerceComponent },
            { path: 'iot-dashboard', component: DashboardComponent },
            { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class PagesRoutingModule {

}