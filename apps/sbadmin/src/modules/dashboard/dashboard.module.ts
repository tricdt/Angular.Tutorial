import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Containers */
import * as dashboardContainers from './containers';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [...dashboardContainers.containers],
  imports: [
    CommonModule, NavigationModule, NgbAccordionModule
  ],
  exports:[...dashboardContainers.containers],
  providers: [],
})
export class DashboardModule { }
