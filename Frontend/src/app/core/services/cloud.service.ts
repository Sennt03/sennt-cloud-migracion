import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType, HttpProgressEvent } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, ObservableInput, Subject, catchError, every, map, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/enviroment/enviroment';
import { LsResMessage, LsUploadFile } from '@models/cloud.models';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  private url = `${environment.url_api}/cloud`

  $newFolder = new EventEmitter<boolean>()

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  uploadFile(files: Object, path: string): Observable<{ progress: number, event?: LsUploadFile }> {
    const formdata = new FormData();
    for (const key in files) {
      if (files.hasOwnProperty(key)) {
        formdata.append('files', files[key]);
      }
    }
    formdata.append('path', path);

    const progressSubject = new Subject<{ progress: number, event?: LsUploadFile }>();

    this.http.post<LsUploadFile>(`${this.url}/uploadFile/${path}`, formdata, {
      reportProgress: true,
      observe: 'events'
    }).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          const progress = event.total ? Math.round(100 * event.loaded / event.total) : 0;
          progressSubject.next({ progress });
          break;
        case HttpEventType.Response:
          progressSubject.next({ progress: 100, event: event.body });
          progressSubject.complete();
          break;
      }
    });

    return progressSubject.asObservable();
  }

  createFolder(name: string, path: string): Observable<LsResMessage>{
    return this.http.post<LsResMessage>(`${this.url}/createDir/${path}`, { name })
  }

  downloadFile(path: string): Observable<{ progress: number, file?: Blob }> {
    const progressSubject = new Subject<{ progress: number, file?: Blob }>();

    this.http.get(`${this.url}/downloadFile/${path}`, {
      responseType: 'blob',
      reportProgress: true,
      observe: 'events'
    }).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.DownloadProgress:
          const progress = event.total ? Math.round(100 * event.loaded / event.total) : 0;
          progressSubject.next({ progress });
          break;
        case HttpEventType.Response:
          progressSubject.next({ progress: 100, file: event.body });
          progressSubject.complete();
          break;
      }
    });

    return progressSubject.asObservable();
  }

  deleteFile(path: string): Observable<LsResMessage>{
    return this.http.delete<LsResMessage>(`${this.url}/delete/${path}`)
  }

}
