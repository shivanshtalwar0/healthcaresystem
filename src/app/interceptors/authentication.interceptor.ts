import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorageService} from '../services/token-storage.service';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService: TokenStorageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.tokenStorageService.isLoggedIn) {
      const authReq = request.clone({
        url:`${environment.baseUrl}${request.url}`,
        setHeaders: {
          Authorization: 'Bearer ' + this.tokenStorageService.getToken
        },
      });
      return next.handle(authReq);
    } else {
      return next.handle(request.clone({url:`${environment.baseUrl}${request.url}`}));
    }
  }
}
