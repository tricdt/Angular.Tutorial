import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbCardModule, NbAccordionModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule, PagesRoutingModule,
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbCardModule, NbCardModule, NbAccordionModule,
    ThemeModule, DashboardModule
  ]
})
export class PagesModule { }
