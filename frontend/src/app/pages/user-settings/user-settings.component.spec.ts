import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserService } from 'src/app/shared/services/user.service';
import { UserSettingsComponent } from './user-settings.component';

describe('UserSettingsComponent', () => {
  let component: UserSettingsComponent;
  let fixture: ComponentFixture<UserSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSettingsComponent],
      imports: [HttpClientModule, AppRoutingModule, ReactiveFormsModule],
      providers: [UserService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty form by defualt', () => {
    expect(component.userForm.get('firstName')?.value).toEqual('');
    expect(component.userForm.get('lastName')?.value).toEqual('');
    expect(component.userForm.get('email')?.value).toEqual('');
    expect(component.userForm.get('phone')?.value).toEqual('');
    expect(component.userForm.get('birthday')?.value).toEqual('');
    expect(component.userForm.get('about')?.value).toEqual('');
    expect(component.userForm.get('avatar')?.value).toEqual('');
  });

  it('should remove the current image with removeImage() function', () => {
    component.removeImage();
    expect(component.userForm.get('avatar')?.value).toEqual('');
  });

  it('should have the useFormControl getter equal with userForm.controls', () => {
    expect(component.userFormControl).toEqual(component.userForm.controls);
  });

  it('should not be submitted by default', () => {
    expect(component.submitted).toBeFalse();
  });

  it('should have a valid date string of the current day for the datepicker', () => {
    expect(component.today).toMatch(
      /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
    );
  });

  it('should not have a warning message by default', () => {
    expect(component.fileWarningMessage).toEqual('');
  });

  it('should not be submitted after calling onSubmit', () => {
    component.onSubmit();
    expect(component.submitted).toBeTrue();
  });
});
