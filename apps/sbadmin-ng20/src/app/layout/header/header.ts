import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, TranslatePipe, NgbDropdownModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  public pushRightClass: string;
  constructor() {}
  ngOnInit(): void {
    this.pushRightClass = 'push-right';
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }
  rltAndLtr() {}
  changeLang(language: string) {}
  onLoggedout() {}
}
