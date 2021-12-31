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

/**
 * User data getter and setter with two different interfaces
 */
@Injectable({
  providedIn: 'root',
})
export class UserService {
  /**
   * The selected interface type: Rest or LocalStorage
   */
  private selectedInterfaceType = InterfaceType.LocalStorage;
  /**
   * The selected interface
   */
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

  /**
   * Adds current date and sets user data
   * @param userData Information about the user
   * @returns Status message
   */
  public setData(userData: UserData): Observable<ResponseStatus> {
    userData.dateOfChange = new Date().toISOString();
    return this.usedService.setData(userData);
  }

  /**
   * Gets user data
   * @returns user data
   */
  public getData(): Observable<UserData> {
    return this.usedService.getData();
  }
}
