import { Component } from '@angular/core';

/**
 * Header component
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /**
   * Shows the state of the hamburger menu
   */
  isHamburgerMenuOpen = false;

  /**
   * Toggles the hamburger menu
   */
  toggleHamburgerMenu = () => {
    this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
  };

  /**
   * Opens the hamburger menu
   */
  closeHamburgerMenu = () => {
    this.isHamburgerMenuOpen = false;
  };
}
