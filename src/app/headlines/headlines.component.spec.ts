import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeadlinesComponent } from "./headlines.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ReactiveFormsModule } from "@angular/forms";

describe("HeadlinesComponent", () => {
  let component: HeadlinesComponent;
  let fixture: ComponentFixture<HeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [HeadlinesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeDefined();
  });
});
