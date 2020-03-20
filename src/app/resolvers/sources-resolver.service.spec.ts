import { TestBed } from "@angular/core/testing";

import { SourcesResolverService } from "./sources-resolver.service";

describe("SourcesResolverService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: SourcesResolverService = TestBed.inject(
      SourcesResolverService
    );
    expect(service).toBeTruthy();
  });
});
