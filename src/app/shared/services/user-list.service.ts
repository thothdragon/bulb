import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private userList: User[] = [];

  constructor() { }

  public getUserList(): User[] {

    return this.userList;

  }

  public setUserList(newUser) {

    this.userList.push(newUser);
    
  }

}
