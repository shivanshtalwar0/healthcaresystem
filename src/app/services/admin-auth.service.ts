import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  isLoggedIn=false
  constructor() { }
  signin(){
    this.isLoggedIn=true;
  }
  logout(){
    this.isLoggedIn=false;
  }
}
