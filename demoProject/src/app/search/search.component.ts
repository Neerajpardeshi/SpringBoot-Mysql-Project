import { Component, OnInit } from '@angular/core';
import { AddEmployeeServiceService } from '../add-employee-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
emp:any
empid:number=0
  constructor(private service:AddEmployeeServiceService) { }

  ngOnInit(): void {
  }
  public searchEmp(){
    let response=this.service.searchEmployee(this.empid)
    response.subscribe(data=>this.emp=data)
  }
}
