import { Component, OnInit } from '@angular/core';
import { MessageListService } from '../shared/services/message-list.service';
import { Message } from '../shared/models/message.model';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
})
export class ChannelComponent implements OnInit {

  private messageList: Message[];

  constructor(
    private messageListService: MessageListService
  ) { 
    this.messageList = this.messageListService.getMessageList();
   }

  ngOnInit() {}

}
