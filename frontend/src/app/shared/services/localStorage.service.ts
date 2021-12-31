import { Injectable } from '@angular/core';
import { ResponseStatus, UserData } from 'src/app/app.model';
import { Observable, of } from 'rxjs';

/**
 * Communication with the localstorage of the browser
 */
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /**
   * Stores the user data is the localstorage of the browser.
   * @param userData Information about the user
   * @returns Status message
   */
  public setData(userData: UserData): Observable<ResponseStatus> {
    localStorage.setItem('userData', JSON.stringify(userData));
    return of({ status: 'OK' });
  }

  /**
   * Gets the user data from the localstorage of the browser.
   * @returns user data
   */
  public getData(): Observable<UserData> {
    return of(JSON.parse(localStorage.getItem('userData') as string));
  }
}
