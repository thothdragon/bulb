import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private userList: User[] = [];

  constructor() { }

  public get(): User[] {

    return this.userList;

  }

  public set(newUser: User): void {

    this.userList.push(newUser);

  }

}
