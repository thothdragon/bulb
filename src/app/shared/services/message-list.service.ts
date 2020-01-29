import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageListService {

  private messageList: Message[] = [];

  constructor() { }

  public getMessageList(): Message[] {

    return this.messageList;

  }

}
