import { Observable } from 'rxjs';

/**
 * Information about the user.
 */
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

/**
 * Response status
 */
export interface ResponseStatus {
  status: string;
}

/**
 * Interface for the possible services
 */
export interface DataService {
  getData(): Observable<UserData>;
  setData(d: UserData): Observable<ResponseStatus>;
}

/**
 * Possible interface types
 */
export enum InterfaceType {
  LocalStorage = 'localStorage',
  Rest = 'rest',
}
