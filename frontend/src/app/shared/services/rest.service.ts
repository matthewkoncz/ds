import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseStatus, UserData } from 'src/app/app.model';

/**
 * Communication with a server on HTTP protocol
 */
@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(public httpClient: HttpClient) {}

  /**
   * Posts user data.
   * @param userData Information about the user
   * @returns Status message
   */
  public setData(userData: UserData): Observable<ResponseStatus> {
    return this.httpClient.post(
      'https://ds-mate-koncz-post.free.beeceptor.com/post-user-data',
      userData
    ) as Observable<ResponseStatus>;
  }

  /**
   * Gets the user data.
   * @returns user data
   */
  public getData(): Observable<UserData> {
    return this.httpClient.get(
      'https://ds-mate-koncz-post.free.beeceptor.com/get-user-data'
    ) as Observable<UserData>;
  }
}
