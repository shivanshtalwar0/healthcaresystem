import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8090/hcs/test/';

@Injectable({
    providedIn: 'root'
  })
export class UserService {

  constructor(private http: HttpClient) { }

getAll() {
    return this.http.get<User[]>('${config.apiUrl}/users');
} 

getById(id: number) {
    return this.http.get('${config.apiUrl}/users/' + id);
}

register(user: User) {
    return this.http.post('${config.apiUrl}/users/register', user);
}

update(user: User) {
    return this.http.put('${config.apiUrl}/users/' + user.id, user);
}

delete(id: number) {
    return this.http.delete('${config.apiUrl}/users/' + id);
}

getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'home', { responseType: 'text' });
  }

  getConsumerBoard(): Observable<any> {
    return this.http.get(API_URL + 'consumer', { responseType: 'text' });
  }

  getFacilitatorBoard(): Observable<any> {
    return this.http.get(API_URL + 'facilitator', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
