import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HeadlinesFacade } from "./headlines.facade";

describe("HeadlinesFacade", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it("should be created", () => {
    const service: HeadlinesFacade = TestBed.inject(HeadlinesFacade);
    expect(service).toBeTruthy();
  });
});
