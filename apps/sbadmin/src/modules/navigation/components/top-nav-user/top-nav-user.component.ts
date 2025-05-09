import { Component, OnInit } from '@angular/core';
import { UserService } from '@modules/auth/services/user.service';

@Component({
  standalone: false,
  selector: 'app-top-nav-user',
  templateUrl: './top-nav-user.component.html',
  styleUrl: './top-nav-user.component.scss'
})
export class TopNavUserComponent implements OnInit {
  constructor(public userService: UserService) {}
  ngOnInit() {}
}