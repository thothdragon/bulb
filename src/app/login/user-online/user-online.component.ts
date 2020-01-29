import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/shared/services/user-list.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-online',
  templateUrl: './user-online.component.html',
  styleUrls: ['./user-online.component.scss'],
})
export class UserOnlineComponent implements OnInit {

  private userOnline: User[];

  constructor(
    private userList: UserListService
  ) {
    this.userOnline = this.userList.getUserList();
  }

  ngOnInit() { }


}
