import { Injectable } from '@angular/core';
import { User } from '../models';
import { Observable, ReplaySubject } from 'rxjs';
const userSubject: ReplaySubject<User> = new ReplaySubject(1);
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    this.user = {
      id: '123',
      firstName: 'Start',
      lastName: 'Bootstrap',
      email: 'no-reply@startbootstrap.com',
    };
  }
  set user(user: User) {
    userSubject.next(user);
  }

  get user$(): Observable<User> {
    return userSubject.asObservable();
  }

}
