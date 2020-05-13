import { Injectable } from '@angular/core';


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem('TOKEN_KEY');
    window.sessionStorage.setItem('TOKEN_KEY', token);
  }
  
  public get getToken(): string {
    return sessionStorage.getItem('TOKEN_KEY');
  }

  public saveUser(user) {
    window.sessionStorage.removeItem('USER_KEY');
    window.sessionStorage.setItem('USER_KEY', JSON.stringify(user));
  }

  public setAuthenticated(){
    window.sessionStorage.setItem('IS_AUTHENTICATED','true');
  }

  public get getUser() {
    return JSON.parse(sessionStorage.getItem('USER_KEY'));
  }

  public get isLoggedIn(){
    return window.sessionStorage.getItem('IS_AUTHENTICATED')==='true';
  }

  public saveRoles(Roles){
    let tempRoles=[];
    Roles.array.forEach(element => {
      tempRoles.push(element.authority);
    });
    window.sessionStorage.setItem('roles',JSON.stringify(tempRoles));
  }
  
  public get getRoles():Array<string>{
    return JSON.parse(window.sessionStorage.getItem('roles'));
  }
}
