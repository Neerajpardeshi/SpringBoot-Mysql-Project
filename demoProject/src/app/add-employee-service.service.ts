import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeData } from './EmployeeData';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeServiceService {

  constructor(private http:HttpClient) { }

  public addEmployee(data: EmployeeData){
    return this.http.post("http://localhost:8080/insert",data,{responseType:"text" as "json"})
  }

  public getAllEmployees(){
    return this.http.get("http://localhost:8080/allemps")
  }

  public searchEmployee(empid: number)
  {
    return this.http.get("http://localhost:8080/search/"+empid)
  }

  public deleteEmp(empid:number)
  {
    return this.http.delete("http://localhost:8080/delete/"+empid)
  }

  public updateEmployee(data: EmployeeData){
    return this.http.put("http://localhost:8080/update",data,{responseType:"text" as "json"})
  }
}
