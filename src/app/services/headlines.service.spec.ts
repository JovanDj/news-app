import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HeadlinesResponse, SearchCriteria } from "../models/headline.model";
import { HeadlinesService } from "./headlines.service";

describe("Headlines Service", () => {
  let service: HeadlinesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeadlinesService]
    });

    service = TestBed.inject(HeadlinesService);
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
    const dummyHeadlines: HeadlinesResponse = {
      status: "Dummy status",
      totalResults: 2,
      articles: [
        {
          author: "Dummy author 1",
          description: "Dummy description 1",
          publishedAt: "Dummy publishedAt 1",
          source: {
            id: "Dummy id 1",
            name: "Dummy name 1"
          },
          title: "Dummy title 1",
          url: "Dummy url 1",
          urlToImage: "Dummy urlToImage 1"
        },
        {
          author: "Dummy author 1",
          description: "Dummy description 1",
          publishedAt: "Dummy publishedAt 1",
          source: {
            id: "Dummy id 1",
            name: "Dummy name 1"
          },
          title: "Dummy title 1",
          url: "Dummy url 1",
          urlToImage: "Dummy urlToImage 1"
        }
      ]
    };
    const formData: SearchCriteria = {
      topic: "",
      category: "General",
      country: "Germany",
      page: 1,
      pageSize: 10
    };

    service
      .getHeadlines(formData)
      .subscribe((headlinesResponse: HeadlinesResponse) => {
        expect(headlinesResponse.articles.length).toBe(2);
        expect(headlinesResponse).toEqual(dummyHeadlines);
      });

    const request: TestRequest = httpMock.expectOne(
      // (req: HttpRequest<any>) =>
      //   req.method === "GET" &&
      //   req.url === `${service.URL}` &&
      //   req.params.has("category") === true &&
      //   req.params.has("topic") === true &&
      //   req.params.has("country") === true &&
      //   req.responseType === "json" &&
      `${service.URL}?q=&pageSize=10&page=1&category=General&country=Germany`
    );

    expect(request.request.method).toBe("GET");

    request.flush(dummyHeadlines);
  });
});
