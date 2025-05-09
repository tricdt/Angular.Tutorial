import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '@modules/icons/icons.module';

/* Services */
import * as authServices from '@modules/auth/services';

const thirdParty = [IconsModule, NgbModule];

@NgModule({
  declarations: [],
  providers: [...authServices.services],
  imports: [
    CommonModule, ...thirdParty
  ],
  exports: [
    ...thirdParty
  ]
})
export class AppCommonModule { }
