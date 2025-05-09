import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import * as navigationComponents from './components';

/* Containers */
import * as navigationContainers from './containers';

/* Layouts */
import * as appCommonLayouts from './layouts';
import { AppCommonModule } from '@common/app-common.module';

@NgModule({
  declarations: [
    ...navigationContainers.containers,
    ...navigationComponents.components,
    ...appCommonLayouts.layouts,
  ],
  imports: [
    CommonModule, AppCommonModule
  ],
  exports: [
    ...navigationContainers.containers,
    ...navigationComponents.components,
    ...appCommonLayouts.layouts,
  ]

})
export class NavigationModule { }
