import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    NgbModule,

    RouterModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
