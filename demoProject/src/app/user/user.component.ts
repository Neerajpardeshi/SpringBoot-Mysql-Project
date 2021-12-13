import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: Array<any> = [];
  constructor(private udata:UserDataService) { }

  ngOnInit() {
    this.udata.getUser().subscribe(users=>{
      this.userList=users;
    })
  }

}
