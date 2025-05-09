import { Component, HostBinding, Input } from '@angular/core';
import { sideNavItems, sideNavSections } from '@modules/navigation/data';
import { Subscription } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-layout-dashboard',
  templateUrl: './layout-dashboard.component.html',
  styleUrl: './layout-dashboard.component.scss'
})
export class LayoutDashboardComponent {
  @Input() static = false;
  @Input() light = false;
  @HostBinding('class.sb-sidenav-toggled') sideNavHidden = false;
  subscription: Subscription = new Subscription();
  sideNavItems = sideNavItems;
  sideNavSections = sideNavSections;
  sidenavStyle = 'app-sidenav-dark';
}
