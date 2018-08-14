import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isCollapsed = true;
  title = 'News App';
  subtitle = 'Search for news from various sources';

  openDropdown() {
    this.isCollapsed = false;
  }

  closeDropdown() {
    this.isCollapsed = true;
  }
}
