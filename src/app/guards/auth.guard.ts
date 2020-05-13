import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (
      this.tokenStorage.isLoggedIn && this.tokenStorage.getRoles.indexOf('USER') > -1
    ) { return true; }

    else {
      this.router.navigateByUrl('/login');
    }
  }

  constructor(private tokenStorage: TokenStorageService, private router: Router) {

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (
      this.tokenStorage.isLoggedIn && this.tokenStorage.getRoles.indexOf('USER') > -1
    ) { return true; }

    else {
      this.router.navigateByUrl('/login');
    }
  }

}
