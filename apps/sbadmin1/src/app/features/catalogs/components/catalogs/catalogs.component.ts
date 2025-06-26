import { Component } from '@angular/core';
import { routerTransition } from '@app/router.animations';

@Component({
  selector: 'app-catalogs',
  imports: [],
  templateUrl: './catalogs.component.html',
  styleUrl: './catalogs.component.scss',
  animations: [routerTransition()],
  providers: [],
})
export class CatalogsComponent {

}
