import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HeadlinesService } from './headlines.service';
import { Headline } from '../models/headline.model';

describe('Headlines Service', () => {
  let service: HeadlinesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeadlinesService]
    });

    service = TestBed.get(HeadlinesService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a url', () => {
    expect(service.URL).toBeDefined();
  });

  it('should retrieve data from API', () => {
    const dummyHeadline: Headline = {
      status: 'Dummy status',
      totalResults: 2,
      articles: [
        {
          author: 'Dummy author 1',
          description: 'Dummy description 1',
          publishedAt: 'Dummy publishedAt 1',
          source: {
            id: 'Dummy id 1',
            name: 'Dummy name 1'
          },
          title: 'Dummy title 1',
          url: 'Dummy url 1',
          urlToImage: 'Dummy urlToImage 1'
        },
        {
          author: 'Dummy author 1',
          description: 'Dummy description 1',
          publishedAt: 'Dummy publishedAt 1',
          source: {
            id: 'Dummy id 1',
            name: 'Dummy name 1'
          },
          title: 'Dummy title 1',
          url: 'Dummy url 1',
          urlToImage: 'Dummy urlToImage 1'
        }
      ]
    };
    const formData: any = {
      topic: '',
      category: 'General',
      country: 'Germany'
    };

    service.getHeadlines(formData).subscribe(headline => {
      expect(headline['articles'].length).toBe(2);
      expect(headline).toEqual(dummyHeadline);
    });

    const request = httpMock.expectOne(
      req =>
        req.method === 'GET' &&
        req.url === `${service.URL}` &&
        req.params.has('category') === true &&
        req.params.has('topic') === true &&
        req.params.has('country') === true &&
        req.responseType === 'json'
    );

    request.flush(dummyHeadline);
  });
});
