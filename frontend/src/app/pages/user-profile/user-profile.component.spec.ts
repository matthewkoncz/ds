import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from 'src/app/shared/services/user.service';

import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileComponent],
      imports: [HttpClientModule],
      providers: [UserService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have user data by default', () => {
    expect(component.userData).toBeFalsy();
  });

  it('should have an undefined age by default', () => {
    expect(component.age).toBeUndefined();
  });

  it('should calculate the age from the date of birth', () => {
    // @ts-ignore
    expect(component.getAge('1993-01-25')).toBeGreaterThanOrEqual(28);
  });
});
