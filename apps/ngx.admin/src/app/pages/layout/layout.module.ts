import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { AccordionComponent } from './accordion/accordion.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [LayoutComponent, AccordionComponent, InfiniteListComponent, ListComponent, StepperComponent, TabsComponent],
  imports: [
    CommonModule, LayoutRoutingModule
  ]
})
export class LayoutModule { }
