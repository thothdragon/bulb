import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserListService } from '../shared/services/user-list.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  private todo: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userListService: UserListService,
  ) {
    this.todo = formBuilder.group({
      pseudo: ['', Validators.required],
      age: [''],
      city: [''],
      gender:['Male'||'Female'||'Neutral'],
      role:['Visitor'||'Admin'],
      avatar:[''],
    });
  }
  
  logForm() {
    
    this.userListService.setUserList(this.todo.value);

    console.log(this.todo.value);

    console.log(this.userListService);
    
  }

  
  

  ngOnInit() { }

}
