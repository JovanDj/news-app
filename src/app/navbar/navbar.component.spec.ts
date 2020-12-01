import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { NavbarComponent } from "./navbar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterTestingModule } from "@angular/router/testing";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule, RouterTestingModule],
      declarations: [NavbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
