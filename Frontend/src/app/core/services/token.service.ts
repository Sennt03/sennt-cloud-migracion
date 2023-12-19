import { HttpContext, HttpContextToken, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if(request.context.get(noToken) == true){
      return next.handle(request)
    }
    request = this.addToken(request)
    return next.handle(request)
  }

  private addToken(request: HttpRequest<any>){
    const token = this.authService.getToken()
    if(token){
      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        }
      })
      return request
    }
    return request
  }
}

const noToken = new HttpContextToken<boolean>(() => false)

export function noInterceptToken(){
	return new HttpContext().set(noToken, true)
}