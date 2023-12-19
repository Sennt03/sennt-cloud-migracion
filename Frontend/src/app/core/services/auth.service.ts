import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment/enviroment';
import { Observable, ObservableInput, catchError, throwError } from 'rxjs';
import { LsLogin, LsResAuth } from '../models/auth.models';
import { LsUser } from '@models/user.models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${environment.url_api}/auth`
  private url_user = `${environment.url_api}/user`

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(data: LsLogin): Observable<LsResAuth>{
    return this.http.post<LsResAuth>(`${this.url}/login`, data)
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

  getProfile(): Observable<LsUser>{
    return this.http.get<LsUser>(this.url)
    .pipe(catchError(err => { return this.handleError(err) }))
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
