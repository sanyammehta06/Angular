import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Phone:string='0123456789';
  Email:string=' blog@gmail.com';
  constructor() { }

  ngOnInit(): void {
  }

}
