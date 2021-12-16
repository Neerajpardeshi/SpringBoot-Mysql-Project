import { Component, OnInit } from '@angular/core';
import { AddEmployeeServiceService } from '../add-employee-service.service';
import { Router } from '@angular/router';
import { EmployeeData } from '../EmployeeData';
import { EditEmployeeService } from '../edit-employee.service';
@Component({
  selector: 'app-greet-emp',
  templateUrl: './greet-emp.component.html',
  styleUrls: ['./greet-emp.component.css']
})
export class GreetEmpComponent implements OnInit {
emps:any

  constructor(private service:AddEmployeeServiceService,private router:Router,private edit:EditEmployeeService) { }

  ngOnInit(): void {
    //if we want to load data directly without any button
    //write it in ngOnInit
    let response=this.service.getAllEmployees()
    response.subscribe(data=>this.emps=data)
  }

  public deleteEmployee(empid:number){
    let respose=this.service.deleteEmp(empid)
    respose.subscribe(data=>this.emps=data)
  }
  public updateEmployee(emps:EmployeeData)
  {
    this.edit.updateRecord(emps)
    this.router.navigateByUrl('/update')
  }

}
