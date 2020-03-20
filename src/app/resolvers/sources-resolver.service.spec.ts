import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { SourcesService } from "../services/sources.service";
import { SourcesResolverService } from "./sources-resolver.service";

describe("SourcesResolverService", () => {
  let service: SourcesResolverService;
  let sourcesServiceSpy: jasmine.SpyObj<SourcesService>;

  beforeEach(() => {
    sourcesServiceSpy = jasmine.createSpyObj("SourcesService", ["getSources"]);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SourcesResolverService,
        { provide: SourcesService, useValue: sourcesServiceSpy }
      ]
    });
    service = TestBed.inject(SourcesResolverService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("resolve method", () => {
    beforeEach(() => {
      service.resolve();
    });

    it("should call get service method once", () => {
      expect(sourcesServiceSpy.getSources).toHaveBeenCalledTimes(1);
    });

    it("should call get service method with no parameters", () => {
      expect(sourcesServiceSpy.getSources).toHaveBeenCalledWith();
    });
  });
});
