import { Component, OnInit } from '@angular/core';
import { AddEmployeeServiceService } from '../add-employee-service.service';
import { EmployeeData } from '../EmployeeData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data : EmployeeData=new EmployeeData(0,"","","","","","")
  message: any
  
  constructor(private service:AddEmployeeServiceService) { }

  
  ngOnInit(): void {
  }
  public registerNow()
  {
    let response = this.service.addEmployee(this.data)
    response.subscribe(msg=>{
      this.message=msg
    })
  }
}