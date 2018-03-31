import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  title = 'News App';
  subtitle = 'Search for news from various sources';


  constructor() {
  }

  openDropdown() {
    this.isCollapsed = false;
  }

  closeDropdown() {
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

}
