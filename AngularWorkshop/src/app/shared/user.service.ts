import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl="http://localhost:8081/SpringMVC/servlet/getAllUserNamesJPQL";
  constructor(private _http:HttpClient) { }

  getUsersName() : Observable<string[]> {
    return this._http.get<string[]>(this.usersUrl);
}
}
