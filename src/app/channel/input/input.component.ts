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
    this.messageListService
      .update(this.messageForm.get('message').value)
      .then((success) => {
        console.log(success);
      })
      .catch(() => {
        console.log('error !');
      });
    this.messageForm.get('message').setValue('');
  }

}
