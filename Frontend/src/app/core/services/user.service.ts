import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { LsUser } from '@models/user.models';
import { Observable, ObservableInput, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = `${environment.url_api}/user`
  userProfile = new EventEmitter<boolean>()

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  getProfile(): Observable<LsUser>{
    return this.http.get<LsUser>(this.url)
    .pipe(catchError(err => { return this.handleError(err) }))
  }

  isValidEmal(email: string){
    return this.http.post(`${this.url}/validateEmail`, { email })
  }

  private handleError(err: HttpErrorResponse): ObservableInput<any>{
    if(err.status === 401){
      this.authService.logout()
      return throwError('Unauthorized')
    }
    return throwError('Error unexpected')
  }

}
