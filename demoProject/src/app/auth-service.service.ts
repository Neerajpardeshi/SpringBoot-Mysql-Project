import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  //define subject
  subject=new Subject<string>()
  
  constructor() { }
  setUserName(username:string)
  {
    //add username to subject -- stream of values
    this.subject.next(username)
  }

  getUsername():Observable<string>{
    return this.subject.asObservable()
  }
}
