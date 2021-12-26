import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/app.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  public userData: UserData = {};

  age: number;

  constructor(public userService: UserService) {
    this.userData = this.userService.getData();
    this.userData.dateOfChange = new Date(
      this.userData.dateOfChange as string
    ).toLocaleString();
    this.age = this.getAge(this.userService.getData().birthday as string);
  }

  private getAge(birthDateString: string) {
    let birthDate = new Date(birthDateString);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
