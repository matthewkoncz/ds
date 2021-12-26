import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.scss'],
})
export class InformationFormComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.setData({ firstName: 'Máté' });
  }
}
