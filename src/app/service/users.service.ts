import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from '../models/User.model';


/**
 * UserService manages our current user
 * perhaps its needs from root in injectable
 */
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // `currentUser` contains the current user
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  // potentially adding a new service
  // constructor(public service: OtherService){}

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export const userServiceInjectables: Array<any> = [
  UsersService
];
