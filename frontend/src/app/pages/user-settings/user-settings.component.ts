import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseStatus } from 'src/app/app.model';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent {
  userForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    email: new FormControl('', [Validators.email]),
    phone: new FormControl('', [Validators.pattern('[- +()0-9]+')]),
    birthday: new FormControl(null, Validators.required),
    about: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(500),
    ]),
    avatar: new FormControl('', Validators.required),
  });

  get userFormControl() {
    return this.userForm.controls;
  }

  public submitted = false;

  // max value for datepicker in "YYYY-MM-DD" format
  public today = new Date().toISOString().substring(0, 10);

  public fileWarningMessage = '';

  constructor(
    public userService: UserService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.userService.getData().subscribe((savedUserData) => {
      this.userForm.patchValue(savedUserData);
    });
  }

  public convertImageToBase64 = (event: Event): void => {
    const file = (event.target as HTMLInputElement).files![0];
    if (file) {
      if ((file as Blob).size / 1024 > 500) {
        this.userForm.patchValue({
          avatar: '',
        });
        this.userForm.get('avatar')?.updateValueAndValidity();
        this.fileWarningMessage =
          'The selected image is larger than 500KB. Please select a smaller one.';
        return;
      }
      this.fileWarningMessage = '';
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.userForm.patchValue({
          avatar: reader.result as string,
        });
        this.userForm.get('avatar')?.updateValueAndValidity();
      };
    }
  };

  public removeImage = (): void => {
    this.userForm.patchValue({
      avatar: '',
    });
    this.userForm.get('avatar')?.updateValueAndValidity();
  };

  public onSubmit = () => {
    this.submitted = true;
    if (this.userForm.valid) {
      this.userService
        .setData(this.userForm.value)
        .subscribe((response: ResponseStatus) => {
          if (response?.status === 'OK') {
            this.router.navigate(['/details']);
          }
        });
    }
  };
}
