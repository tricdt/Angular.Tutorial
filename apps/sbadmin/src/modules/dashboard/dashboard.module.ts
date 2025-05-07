import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Containers */
import * as dashboardContainers from './containers';

@NgModule({
  declarations: [...dashboardContainers.containers],
  imports: [
    CommonModule,
  ],
  exports:[...dashboardContainers.containers],
  providers: [],
})
export class DashboardModule { }
