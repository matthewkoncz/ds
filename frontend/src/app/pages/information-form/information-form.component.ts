import { Component } from '@angular/core';
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

  constructor(public userService: UserService) {
    let savedUserData = this.userService.getData();
    this.userForm.patchValue(savedUserData);
  }

  public convertImageToBase64 = (event: any): void => {
    const file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.userForm.patchValue({
          avatar: reader.result as string,
        });
        this.userForm.get('avatar')?.updateValueAndValidity();
      };
    }
  };

  public onSubmit() {
    this.userService.setData(this.userForm.value);
  }
}
