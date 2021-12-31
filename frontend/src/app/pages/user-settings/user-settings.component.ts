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
import { HttpErrorResponse } from '@angular/common/http';

/**
 * User settings page
 */
@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent {
  /**
   * Reactive form for user information
   */
  userForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.pattern('[- +()0-9]+')]),
    birthday: new FormControl('', Validators.required),
    about: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(500),
    ]),
    avatar: new FormControl('', Validators.required),
  });

  /**
   * Get controls of userForm
   */
  get userFormControl() {
    return this.userForm.controls;
  }

  /**
   * Max value for datepicker in "yyyy-MM-dd" format.
   * Latest available date is today.
   */
  public today = new Date().toISOString().substring(0, 10);

  /**
   * Marks if the form is submitted or not
   */
  public submitted = false;

  /**
   * Notifies the user if the file is too large
   */
  public fileWarningMessage = '';

  /**
   * Describes the error message after submitting
   */
  public submitErrorMessage = '';

  constructor(
    public userService: UserService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.userService.getData().subscribe((savedUserData) => {
      this.userForm.patchValue(savedUserData);
    });
  }

  /**
   * Converts uploaded image to string in base64 format.
   * Maximal file size is 500kb.
   * @param event Change event of file uploader
   */
  public convertImageToBase64 = (event: Event): void => {
    const files = (event.target as HTMLInputElement).files as FileList;
    if (files && files[0]) {
      const file = files[0];
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

  /**
   * Resets the current avatar value on the form
   */
  public removeImage = (): void => {
    this.userForm.patchValue({
      avatar: '',
    });
    this.userForm.get('avatar')?.updateValueAndValidity();
  };

  /**
   * Submits a the form
   */
  public onSubmit = () => {
    this.submitted = true;
    if (this.userForm.valid) {
      this.userService.setData(this.userForm.value).subscribe(
        (response: ResponseStatus) => {
          if (response?.status === 'OK') {
            this.router.navigate(['/details']);
          }
        },
        (error: HttpErrorResponse) => {
          this.submitErrorMessage = error.statusText;
        }
      );
    }
  };
}
