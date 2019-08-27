import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

declare var gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSpinner = false;

  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {
      // this.checkRouterEvent(routerEvent);

      if (routerEvent instanceof NavigationEnd) {
        gtag('config', 'G-PM7FDJJRD0', {
          page_path: routerEvent.urlAfterRedirects
        });
      }
    });

    //   if (routerEvent instanceof NavigationStart) {
    //     this.showSpinner = true;
    //   }
  }

  // private checkRouterEvent(routerEvent: Event): void {
  //   if (routerEvent instanceof NavigationStart) {
  //     this.showSpinner = true;
  //   }

  //   if (
  //     routerEvent instanceof NavigationEnd ||
  //     routerEvent instanceof NavigationCancel ||
  //     routerEvent instanceof NavigationError
  //   ) {
  //     this.showSpinner = false;
  //   }
  // }
}
