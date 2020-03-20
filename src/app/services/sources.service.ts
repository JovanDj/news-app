import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Source } from '../models/source.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SourcesService {
  URL = environment.baseUrl + '/sources';

  constructor(private http: HttpClient) {}

  getSources(): Observable<Source> {
    return this.http
      .get<Source>(this.URL)
      .pipe(catchError(err => throwError(err)));
  }
}
