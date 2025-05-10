import { Component, Input } from '@angular/core';
import { SBRouteData, SideNavItem } from '@modules/navigation/models';

@Component({
  standalone: false,
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrl: './side-nav-item.component.scss'
})
export class SideNavItemComponent {
  @Input() sideNavItem!: SideNavItem;
  @Input() isActive!: boolean;

  expanded = false;
  routeData!: SBRouteData;

  constructor() { }
  ngOnInit() { }
}
