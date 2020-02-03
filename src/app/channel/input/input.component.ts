import { Component, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { MessageListService } from 'src/app/shared/services/message-list.service';
import { Message } from 'src/app/shared/models/message.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements AfterViewInit {

  private messageForm: FormGroup;
  private user: User;

  constructor(
    private userService: UserService,
    private messageListService: MessageListService,
    private formBuilder: FormBuilder,
  ) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.messageForm = this.formBuilder.group({
        message: ['', Validators.required],
      });
    });
  }

  public sendMessage() {
    console.log("J'ai posté un message !");
    const message: Message = {
      user: this.userService.get(),
      value: this.messageForm.get('message').value,
      timestamp: Date.now() / 1000
    };
    this.messageListService.push(message);
    this.messageForm.get('message').setValue('');
  }

}
