import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  genders = ['male', 'female'];
  submitted = false;
  user = {
    username: '',
    email: '',
    secret: '',
    gender: '',
  };
  constructor() { }

  ngOnInit(): void {
  }
  defaultQuestion = 'pet';
  onSubmit(form: NgForm) {
  
    this.user.username = form.value.userData.username;
    this.user.email = form.value.userData.email;
    this.user.secret = form.value.secret;
    this.user.gender = form.value.gender;
    this.submitted = true;
    form.reset();
  }
}

