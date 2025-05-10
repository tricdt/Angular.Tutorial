import { Component, Input } from '@angular/core';
import { UserService } from '@modules/auth/services';
import { SideNavItems, SideNavSection } from '@modules/navigation/models';
import { NavigationService } from '@modules/navigation/services';
import { Subscription } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  @Input() sidenavStyle!: string;
  @Input() sideNavItems!: SideNavItems;
  @Input() sideNavSections!: SideNavSection[];
  subscription: Subscription = new Subscription();
  routeDataSubscription!: Subscription;

  constructor(public navigationService: NavigationService, public userService: UserService) {}

  ngOnInit() {}

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
