import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment/enviroment';
import { Observable, ObservableInput, catchError, throwError } from 'rxjs';
import { LsFields, LsLogin, LsRegister, LsResAuth, LsisAvaible } from '../models/auth.models';
import { LsUser } from '@models/user.models';
import { Router } from '@angular/router';
import { noInterceptToken } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${environment.url_api}/auth`
  private noToken = { context: noInterceptToken() }

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  validateAvaible(data: string, field: LsFields): Observable<LsisAvaible>{
    return this.http.post<LsisAvaible>(`${this.url}/validate/${field}`, {value: data}, this.noToken)
  }

  login(data: LsLogin): Observable<LsResAuth>{
    return this.http.post<LsResAuth>(`${this.url}/login`, data)
  }

  register(data: LsRegister): Observable<LsResAuth>{
    return this.http.post<LsResAuth>(`${this.url}/register`, data)
  }

  saveAuth(data: LsResAuth){
    localStorage.setItem('auth', JSON.stringify(data))
  }

  updateAuthUser(user: LsUser){
    try{
      const auth = JSON.parse(localStorage.getItem('auth'))
      auth.user = user
      localStorage.setItem('auth', JSON.stringify(auth))
      // this.saveInStore(user)
    }catch{
      this.logout()
    }
  }

  getAuth(): LsResAuth | boolean{
    try{
      return JSON.parse(localStorage.getItem('auth'))
    }catch{
      this.logout()
      return false
    }
  }

  getToken(): string{
    const auth: any = this.getAuth()
    return auth?.token
  }

  loggedIn(){
    const token = this.getAuth() as LsResAuth
    return token ? true : false
  }

  logout(){
    localStorage.removeItem('auth')
    this.router.navigate(['/auth/login'])
  }

  private handleError(err: HttpErrorResponse): ObservableInput<any>{
    if(err.status === 401){
      this.logout()
      return throwError('Unauthorized')
    }
    return throwError('Error unexpected')
  }


}
