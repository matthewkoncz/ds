import { Data } from "@angular/router";

export interface UserData {
  firstName?: string,
  lastName?: string,
  email?: string,
  phone?: string,
  birthday?: Data,
  about?: string,
  avatar?: string
}
