import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-name-header',
  templateUrl: './name-header.component.html',
  styleUrls: ['./name-header.component.css']
})
export class NameHeaderComponent implements OnInit {
  username: string="Guest";
  constructor(private auth:AuthServiceService) { }

  ngOnInit(): void {
      this.auth.getUsername().subscribe(newUserName=>{
        this.username=newUserName
      })
  }
}
