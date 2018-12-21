import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  title = 'News App';
  subtitle = 'Get breaking news headlines, and search for articles from over 30,000 news sources and blogs';

  constructor() {}

  toggleDropdown() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {}
}
