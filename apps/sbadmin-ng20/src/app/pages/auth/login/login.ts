import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routerTransition } from '@app/router.animation';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  animations: [routerTransition()],
})
export class Login {
  constructor(private translate: TranslateService) {
    // this.translate.use('fr');
  }
  onLoggedin() {}
}
