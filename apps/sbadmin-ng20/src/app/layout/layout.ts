import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
  styles: ``,
})
export class Layout {}
