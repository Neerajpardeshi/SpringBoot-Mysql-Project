import { Injectable } from '@angular/core';
import { EmployeeData } from './EmployeeData';

@Injectable({
  providedIn: 'root'
})
export class EditEmployeeService {
  data:EmployeeData=new EmployeeData(0,"","","","","","")
  constructor() { }
  public updateRecord(emps:EmployeeData){
    this.data=emps
  }
  public getUpdateRecord(){
    return this.data
  }
}
