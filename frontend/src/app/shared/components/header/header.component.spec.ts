import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a closed hamburger menu by default', () => {
    expect(component.isHamburgerMenuOpen).toBeFalse();
  });

  it('should open the hamburger menu with the toggleHamburgerMenu function', () => {
    component.isHamburgerMenuOpen = false;
    component.toggleHamburgerMenu();
    expect(component.isHamburgerMenuOpen).toBeTrue();
  });

  it('should close the hamburger menu with the toggleHamburgerMenu function', () => {
    component.isHamburgerMenuOpen = true;
    component.toggleHamburgerMenu();
    expect(component.isHamburgerMenuOpen).toBeFalse();
  });

  it('should close the hamburger menu with the closeHamburgerMenu function', () => {
    component.isHamburgerMenuOpen = true;
    component.closeHamburgerMenu();
    expect(component.isHamburgerMenuOpen).toBeFalse();
  });
});
