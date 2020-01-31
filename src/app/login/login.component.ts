import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';
import { UserListService } from '../shared/services/user-list.service';
import { avatarList } from 'src/environments/avatar-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private userListService: UserListService
  ) { }

  ngAfterViewInit(): void {
    const user: User = this.userService.get();
    if (!user || !user.pseudo) {
      const user: User = new User;
      user.role = {
        admin: !this.userListService.get().length ? true : false
      }
      user.avatar = avatarList[Math.floor(Math.random() * avatarList.length)];
      this.userService.set(user);
      // !!! Temp redirection to profile for form dev
      // this.router.navigate(["/profile"]);
      // !!! Temp redirection to profile for form dev
      return;
    }
    this.router.navigate(["/login"]);
  }
}
