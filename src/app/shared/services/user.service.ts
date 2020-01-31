import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  constructor() {
    // TODO find saved user from the window.localStorage and set him
  }

  public get(): User {
    return this.user;
  }

  public set(user: User): void {
    // TODO saved user in the window.localStorage
    this.user = user;
  }

}
