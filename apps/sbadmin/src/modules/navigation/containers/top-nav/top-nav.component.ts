import { Component } from '@angular/core';
import { NavigationService } from '@modules/navigation/services';

@Component({
  standalone: false,
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  constructor(private navigationService: NavigationService) { }
  toggleSideNav(){
    this.navigationService.toggleSideNav();
  }
}
