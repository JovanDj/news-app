import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Headline, SearchCriteria } from '../models/headline.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HeadlinesService {
  URL: string = environment.baseUrl + '/top-headlines';

  constructor(private http: HttpClient) {}

  getHeadlines(formData: SearchCriteria, page = 1): Observable<Headline> {
    let params: HttpParams = new HttpParams();
    params = params.set('q', formData.topic);
    params = params.set('pageSize', formData.pageSize.toString());
    params = params.set('page', page.toString());

    for (const category of formData.category) {
      params = params.append('category', category);
    }

    for (const country of formData.country) {
      params = params.append('country', country);
    }

    return this.http.get<Headline>(this.URL, { params }).pipe(catchError((err: HttpErrorResponse) => throwError(err)));
  }
}
