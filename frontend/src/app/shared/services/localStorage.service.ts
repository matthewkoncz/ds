import { Injectable } from '@angular/core';
import { ResponseStatus, UserData } from 'src/app/app.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public setData(userData: UserData): Observable<ResponseStatus> {
    localStorage.setItem('userData', JSON.stringify(userData));
    return of({ status: 'OK' });
  }

  public getData(): Observable<UserData> {
    return of(JSON.parse(localStorage.getItem('userData') as string));
  }
}
