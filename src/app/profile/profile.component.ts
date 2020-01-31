import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserListService } from '../shared/services/user-list.service';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';
import { avatarList } from 'src/environments/avatar-list';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements AfterViewInit {

  private userForm: FormGroup;
  private user: User;

  constructor(
    private router: Router,
    private userService: UserService,
    private userListService: UserListService,
    private formBuilder: FormBuilder,
  ) { }


  ngAfterViewInit(): void {
    this.user = this.userService.get();
    // console.log(this.user);

    if (!this.user) {
      this.router.navigate(["/login"]);
      return;
    };

    setTimeout(() => {

      this.userForm = this.formBuilder.group({
        pseudo: [this.user.pseudo, Validators.required],
        age: [this.user.age],
        city: [this.user.city],
        gender: [this.user.genre],
        avatar: [this.user.avatar],
        // gender: ['Male' || 'Female' || 'Neutral']
      });

    });

  }

  saveUser(): void {

    this.userListService.set(this.userForm.value);

    // console.log(this.userForm.value);

    // console.log(this.userListService);

  }

  prev() {
    let index = avatarList.indexOf(this.userForm.get('avatar').value);    
    if (0 === index) {
      index = avatarList.length - 1
    } else {
      --index
    };
    this.userForm.get('avatar').setValue(avatarList[index]);
  }

  next() {
    let index = avatarList.indexOf(this.userForm.get('avatar').value);    
    if (index === avatarList.length - 1) {
      index = 0
    } else {
      ++index
    };
    this.userForm.get('avatar').setValue(avatarList[index]);
  }

}
