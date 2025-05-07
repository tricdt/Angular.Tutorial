import { Component } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
  standalone: false,
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {
  menu = MENU_ITEMS;
}
