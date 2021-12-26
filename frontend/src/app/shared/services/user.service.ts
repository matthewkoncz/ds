import { Injectable } from '@angular/core';
import { UserData } from 'src/app/app.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  interfaceType = 'localStorage';

  public setData(userData: UserData): void {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  public getData(): UserData {
    return JSON.parse(localStorage.getItem('userData') || '');
  }
}
