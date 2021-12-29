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
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.scss'],
})
export class InformationFormComponent {
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    birthday: new FormControl('', Validators.required),
    about: new FormControl('', [Validators.required, Validators.minLength(20)]),
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
    let savedUserData = this.userService.getData();
    this.userForm.patchValue(savedUserData);
  }

  public convertImageToBase64 = (event: any): void => {
    const file = event.target.files[0];

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
