import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {FormlyModule} from '@ngx-formly/core';
import {NavbarComponent} from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { HeadlinesComponent } from './headlines/headlines.component';
import {AppRoutingModule} from './app-routing.module';
import { EverythingComponent } from './everything/everything.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadlinesComponent,
    EverythingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    NgbModule.forRoot(),
    FormlyBootstrapModule,
    FormlyModule.forRoot(),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
