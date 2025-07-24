import { Component, OnInit } from "@angular/core";
import { AppFooter } from "./app.footer";
import { AppTopbar } from "./app.topbar";
import { AppSidebar } from "./app.sidebar";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-layout",
  template: `
    <div class="layout-wrapper" [ngClass]="containerClass">
      <app-topbar />
      <app-sidebar />
      <div class="layout-main-container">
        <div class="layout-main">
          <router-outlet></router-outlet>
        </div>
      </div>
      <app-footer />
    </div>
  `,
  imports: [CommonModule, AppFooter, AppTopbar, AppSidebar, RouterOutlet],
})
export class AppLayout implements OnInit {
  constructor() {}

  ngOnInit() {}

  get containerClass() {
    return {
      "layout-static": true,
      "layout-static-inactive": false,
    };
  }
}
