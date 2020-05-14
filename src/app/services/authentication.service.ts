import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'auth-service/';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }


  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(AUTH_API + 'auth/authorize', {
      username: username, password: password
    });
  }


  register(username: string, firstName: string, lastName: string, contactno: bigint,
    password: string): Observable<any> {
    return this.http.post(AUTH_API+'auth/signup', {
      username: username,
      firstName: firstName,
      lastName: lastName,
      contactNo: contactno,
      password: password,
      //make sure to restrict user from creating any other roles except user so in backend hardcode roles list with USER
      //otherwise anyone can make admin account :(
      //when you do that then you don't have to explicitly provide rolesList to signup endpoint
      //for testing purpose i am adding rolesList here..
      rolesList:["USER"]
    });
  }
}
