import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LsOpenDir } from '@models/dashboard.models';
import { Observable, ObservableInput, Subject, catchError, throwError } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private url = `${environment.url_api}/cloud`

  private reloadDashboardSubject = new Subject<{data: any}>();
  reloadDashboard$ = this.reloadDashboardSubject.asObservable();

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  openDir(path: string): Observable<LsOpenDir>{
    return this.http.get<LsOpenDir>(`${this.url}/openDir/${path}`)
    .pipe(catchError(err => { return this.handleError(err) }))
  }

  reloadDashboard(data: any) {
    this.reloadDashboardSubject.next(data);
  }

  private handleError(err: HttpErrorResponse): ObservableInput<any>{
    if(err.status === 401){
      this.authService.logout()
      return throwError('Unauthorized')
    }
    return throwError('Error unexpected')
  }
}
