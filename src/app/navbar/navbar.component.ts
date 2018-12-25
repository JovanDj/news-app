import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  title = 'News App';
  subtitle = 'Breaking news, huge number of sources';

  constructor() {}

  toggleDropdown() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {}
}
