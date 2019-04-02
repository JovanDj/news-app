import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Source } from '../models/source.model';
import { Observable } from 'rxjs';

@Injectable()
export class SourcesService {
  URL = environment.baseUrl + '/sources';

  constructor(private http: HttpClient) {}

  getSources(): Observable<Source> {
    return this.http.get<Source>(this.URL);
  }
}
