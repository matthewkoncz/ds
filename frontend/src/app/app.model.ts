import { Observable } from 'rxjs';

export interface UserData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  birthday?: string;
  about?: string;
  avatar?: string;
  dateOfChange?: string;
}

export interface ResponseStatus {
  status: string;
}

export interface DataService {
  getData(): Observable<UserData>;
  setData(d: UserData): Observable<ResponseStatus>;
}

export enum InterfaceType {
  LocalStorage = 'localStorage',
  Rest = 'rest',
}
