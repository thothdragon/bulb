import { Component, AfterViewInit } from '@angular/core';
import { MessageListService } from '../shared/services/message-list.service';
import { Message } from '../shared/models/message.model';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
})
export class ChannelComponent implements AfterViewInit {

  private messageList: Message[];
  private user: User;
  private error: HttpErrorResponse;

  constructor(
    private router: Router,
    private userService: UserService,
    private messageListService: MessageListService,
  ) {
    this.wath();
  }

  ngAfterViewInit() {
    this.user = this.userService.get();
    if (!this.user || !this.user.pseudo) {
      this.router.navigate(["/login"]);
      return;
    };
  }

  public retry() {
    this.error = null;
    this.wath()
  }

  public wath() {
    this.messageListService
      .watch(5000)
      .then((messageList: Message[]) => { this.messageList = messageList })
      .catch((error: HttpErrorResponse) => {
        this.messageListService.clearWatch();
        this.error = error;
      });
  }

}
