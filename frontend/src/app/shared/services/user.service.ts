import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DataService,
  InterfaceType,
  ResponseStatus,
  UserData,
} from 'src/app/app.model';
import { LocalStorageService } from './localStorage.service';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private selectedInterfaceType = InterfaceType.Rest;
  private usedService: DataService;

  constructor(
    private localStorageService: LocalStorageService,
    private restService: RestService
  ) {
    if (this.selectedInterfaceType === InterfaceType.LocalStorage) {
      this.usedService = localStorageService;
    } else {
      // Rest service is a mock
      this.usedService = restService;
    }
  }

  public setData(userData: UserData): Observable<ResponseStatus> {
    userData.dateOfChange = new Date().toISOString();
    return this.usedService.setData(userData);
  }

  public getData(): Observable<UserData> {
    return this.usedService.getData();
  }
}
