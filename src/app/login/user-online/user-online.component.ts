import { Component, AfterViewInit } from '@angular/core';
import { UserListService } from 'src/app/shared/services/user-list.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-online',
  templateUrl: './user-online.component.html',
  styleUrls: ['./user-online.component.scss'],
})
export class UserOnlineComponent implements AfterViewInit {

  private userList: User[];

  constructor(
    private userListService: UserListService
  ) {
    this.userList = this.userListService.get();
  }

  ngAfterViewInit(): void { }


}
