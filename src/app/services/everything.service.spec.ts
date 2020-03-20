import { inject, TestBed } from "@angular/core/testing";

import { EverythingService } from "./everything.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("EverythingService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EverythingService]
    });
  });

  it("should be created", inject(
    [EverythingService],
    (service: EverythingService) => {
      expect(service).toBeTruthy();
    }
  ));
});
