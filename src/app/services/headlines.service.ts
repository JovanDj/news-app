import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Headline, SearchCriteria } from '../models/headline.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeadlinesService {
  URL: string = environment.baseUrl + '/top-headlines';

  constructor(private http: HttpClient) {}

  getHeadlines(formData: SearchCriteria, page = 1): Observable<Headline> {
    let params: HttpParams = new HttpParams();

    params = params.set('q', formData.topic);
    params = params.set('pageSize', formData.pageSize.toString());
    params = params.set('page', page.toString());

    params = params.append('category', formData.category);

    params = params.append('country', formData.country);

    return this.http
      .get<Headline>(this.URL, { params })
      .pipe(catchError((err: HttpErrorResponse) => throwError(err)));
  }
}
