import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8090/';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

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
    return this.http.post(AUTH_API + 'auth/signup', {
      username: username,
      firstName: firstName,
      lastName: lastName,
      contactNo: contactno,
      password: password
    });
  }
}
