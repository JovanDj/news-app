import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Headline } from '../models/headline.model';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HeadlinesFacade } from '../headlines/headlines.facade';

@Injectable()
export class HeadlinesService {
  URL: string = environment.baseUrl + '/top-headlines';

  constructor(private http: HttpClient, private headlinesFacade: HeadlinesFacade) {}

  getHeadlines(formData: any): Observable<Headline> {
    let params: HttpParams = new HttpParams();
    params = params.append('q', formData.topic);

    for (const category of formData.category) {
      params = params.append('category', category);
    }

    for (const country of formData.country) {
      params = params.append('country', country);
    }

    return this.http.get<Headline>(this.URL, { params }).pipe(
      tap((headlines: Headline) => {
        this.headlinesFacade.updateHeadlines(headlines);
      }),

      catchError((err: HttpErrorResponse) => throwError(err))
    );
  }
}
