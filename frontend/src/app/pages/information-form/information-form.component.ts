import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.scss'],
})
export class InformationFormComponent {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    birthday: new FormControl(''),
    about: new FormControl(''),
    avatar: new FormControl(''),
  });

  constructor(public userService: UserService) {}

  showPreview = (event: any): void => {
    const file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = () => {
        this.userForm.patchValue({
          avatar: reader.result as string,
        });
        this.userForm.get('avatar')?.updateValueAndValidity();
      };
      reader.readAsDataURL(file);
    }
  };

  onSubmit() {
    this.userService.setData(this.userForm.value);
  }
}
