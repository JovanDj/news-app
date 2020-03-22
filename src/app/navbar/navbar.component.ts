import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  isCollapsed = true;
  title = "News App";
  subtitle = "Breaking news, huge number of sources";

  constructor() {}

  toggleDropdown(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
