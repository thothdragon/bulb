import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  private todo: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.todo = formBuilder.group({
      pseudo: ['', Validators.required],
      age: [''],
      city: [''],
      gender:['Male'||'Female'||'Neutral'],
      role:['Visitor'],
      avatar:[''],
    });
  }

  logForm() {
    console.log(this.todo.value)
  }

  ngOnInit() { }

}
