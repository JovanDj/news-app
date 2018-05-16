import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ServiceWorkerModule.register('/news-app/ngsw-worker.js', {
      enabled: environment.production
    })
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
