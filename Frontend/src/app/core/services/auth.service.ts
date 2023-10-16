import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment/enviroment';
import { Observable } from 'rxjs';
import { LsLogin, LsResAuth } from '../models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = `${environment.url_api}/auth`

  constructor(
    private http: HttpClient
  ) { }

  login(data: LsLogin): Observable<LsResAuth>{
    return this.http.post<LsResAuth>(`${this.url}/login`, data)
  }
}
