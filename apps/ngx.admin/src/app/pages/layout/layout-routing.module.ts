import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list.component";
import { InfiniteListComponent } from "./infinite-list/infinite-list.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { TabsComponent } from "./tabs/tabs.component";
import { StepperComponent } from "./stepper/stepper.component";

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'stepper', pathMatch: 'full' },
            {path: 'stepper', component: StepperComponent},
            {
                path: 'list',
                component: ListComponent,
            },
            {
                path: 'infinite-list',
                component: InfiniteListComponent,
            },
            {
                path: 'accordion',
                component: AccordionComponent,
            },
            {
                path:'tabs',
                component:TabsComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {

}