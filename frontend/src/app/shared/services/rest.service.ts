import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResponseStatus, UserData } from 'src/app/app.model';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(public httpClient: HttpClient) {}

  public setData(userData: UserData): Observable<ResponseStatus> {
    return this.httpClient.post(
      'https://ds-mate-koncz-post.free.beeceptor.com/post-user-data',
      userData
    ) as Observable<ResponseStatus>;
  }

  public getData(): Observable<UserData> {
    return this.httpClient.get(
      'https://ds-mate-koncz-post.free.beeceptor.com/get-user-data'
    ) as Observable<UserData>;
  }
}
