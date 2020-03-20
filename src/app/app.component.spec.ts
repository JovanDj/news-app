import { async, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeadlinesComponent } from "./headlines/headlines.component";
import { SourcesComponent } from "./sources/sources.component";
import { HomeComponent } from "./home/home.component";
import { EverythingComponent } from "./everything/everything.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CoreModule } from "./core/core.module";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        HeadlinesComponent,
        EverythingComponent,
        SourcesComponent,
        HomeComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        NgbModule,
        CoreModule
      ]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
