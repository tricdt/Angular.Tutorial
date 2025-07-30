import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { AppFunction } from '@app/shared/models/function.model';
import { LayoutService } from '../service/layout.service';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: '[app-menu-item]',
  imports: [CommonModule, RouterModule, RippleModule],
  template: `
    <ng-container>
      <!-- <div *ngIf="root && item.visible !== false" class="layout-menuitem-root-text">{{ item.name }}</div> -->
      <a *ngIf="item.children && item.visible !== false" (click)="itemClick($event)">
        <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
        <span class="layout-menuitem-text" style="text-transform: uppercase; font-weight: bolder;">{{ item.name }}</span>
        <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.children.length > 0"></i>
      </a>
      <a
        *ngIf="!item.children"
        [ngStyle]="{ 'text-transform': !item.parentId && 'uppercase', 'font-weight': !item.parentId && 'bolder' }"
        (click)="itemClick($event)"
        tabindex="0"
        pRipple
        [routerLink]="item.url"
        routerLinkActive="active-route"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
        <span class="layout-menuitem-text">{{ item.name }}</span>
        <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.children"></i>
      </a>
      <ul *ngIf="item.children && item.visible !== false" [@children]="submenuAnimation">
        <ng-template ngFor let-child let-i="index" [ngForOf]="item.children">
          <li app-menu-item [item]="child" [index]="i" [parentKey]="key" [class]="child['badgeClass']"></li>
        </ng-template>
      </ul>
    </ng-container>
  `,
  animations: [
    trigger('children', [
      state(
        'collapsed',
        style({
          height: '0'
        })
      ),
      state(
        'expanded',
        style({
          height: '*'
        })
      ),
      transition('collapsed <=> expanded', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class AppMenuItem1 implements OnInit {
  @Input() item!: AppFunction;
  @Input() index!: number;
  @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;
  @Input() parentKey!: string;
  active = false;
  key: string = '';
  constructor(private layoutService: LayoutService) {}

  ngOnInit() {}

  get submenuAnimation() {
    return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
  }

  itemClick(event: Event) {
    // toggle active state
    if (this.item.children) {
      this.active = !this.active;
    }

    this.layoutService.onMenuStateChange({ key: this.key });
  }

  @HostBinding('class.active-menuitem')
  get activeClass() {
    return this.active && !this.root;
  }
}
