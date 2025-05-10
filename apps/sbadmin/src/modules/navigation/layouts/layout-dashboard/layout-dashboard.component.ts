import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { sideNavItems, sideNavSections } from '@modules/navigation/data';
import { NavigationService } from '@modules/navigation/services';
import { Subscription } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-layout-dashboard',
  templateUrl: './layout-dashboard.component.html',
  styleUrl: './layout-dashboard.component.scss',
})
export class LayoutDashboardComponent implements OnInit, OnDestroy {

  @Input() static = false;
  @Input() light = false;
  @HostBinding('class.app-sidenav-toggled') sideNavHidden = false;

  subscription: Subscription = new Subscription();
  sideNavItems = sideNavItems;
  sideNavSections = sideNavSections;
  sidenavStyle = 'app-sidenav-dark';
  constructor(private navigationService: NavigationService) {

  }


  ngOnInit(): void {
    if (this.light) {
      this.sidenavStyle = 'app-sidenav-light';
    }
    this.subscription = this.navigationService.sideNavVisible$().subscribe((visible) => {
      this.sideNavHidden = !visible;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
