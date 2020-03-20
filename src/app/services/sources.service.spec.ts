import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { SourceResponse } from "../models/source.model";
import { SourcesService } from "./sources.service";

describe("SourcesService", () => {
  let service: SourcesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SourcesService]
    });

    service = TestBed.inject(SourcesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should have a url", () => {
    expect(service.URL).toBeDefined();
  });

  it("should retrieve data from API", () => {
    const dummySource: SourceResponse = {
      status: "ok",
      sources: [
        {
          id: "abc-news",
          name: "ABC News",
          description:
            "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
          url: "http://abcnews.go.com",
          category: "general",
          language: "en",
          country: "us"
        }
      ]
    };
    service.getSources().subscribe((sourceResonse: SourceResponse) => {
      expect(sourceResonse.sources.length).toBe(1);
      expect(sourceResonse).toEqual(dummySource);
    });

    const request: TestRequest = httpMock.expectOne(`${service.URL}`);
    expect(request.request.method).toBe("GET");
    expect(request.request.url).toBe(`${service.URL}`);
    expect(request.request.responseType).toBe("json");

    request.flush(dummySource);
  });
});
