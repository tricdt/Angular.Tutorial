import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routerTransition } from '@app/router.animation';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
  animations: [routerTransition()],
})
export class Signup {}
