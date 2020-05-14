import { Injectable } from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuard implements CanActivate, CanActivateChild {
  constructor(private router:Router,private tokenStorage:TokenStorageService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (
      this.tokenStorage.isLoggedIn && this.tokenStorage.getRoles.indexOf('ADMIN') > -1
    ) { return true; }

    else {
      this.router.navigateByUrl('/users/login');
    }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (
      this.tokenStorage.isLoggedIn && this.tokenStorage.getRoles.indexOf('ADMIN') > -1
    ) { return true; }

    else {
      this.router.navigateByUrl('/users/login');
    }
  }

}
