import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string="admin"
  password:string="admin"

  constructor(private auth1:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  
  authenticate()
  {
    //functions
    this.auth1.setUserName(this.username)
    this.router.navigateByUrl('/productlist')
  }
}