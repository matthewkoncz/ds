import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/app.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  public userData: UserData = {};

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userData = this.userService.getData();
  }
}
