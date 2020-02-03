import { Component, AfterViewInit } from '@angular/core';
import { MessageListService } from '../shared/services/message-list.service';
import { Message } from '../shared/models/message.model';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
})
export class ChannelComponent implements AfterViewInit {

  private messageList: Message[];
  private user: User;

  constructor(
    private router: Router,
    private userService: UserService,
    private messageListService: MessageListService,
  ) {
    this.messageList = this.messageListService.getMessageList();
  }

  ngAfterViewInit() {
    this.user = this.userService.get();
    // console.log(this.user);
    if (!this.user || !this.user.pseudo) {
      this.router.navigate(["/login"]);
      return;
    };
  }

}
