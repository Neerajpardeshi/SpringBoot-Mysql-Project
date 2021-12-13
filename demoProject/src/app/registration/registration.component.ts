import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
signupform:FormGroup
  constructor() { 
    this.signupform=new FormGroup({
      
    })
  }

  ngOnInit(): void {
  }

}
