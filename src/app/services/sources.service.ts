import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Source } from '../models/source.model';

@Injectable()
export class SourcesService {
  URL: string = environment.baseUrl + '/sources';

  constructor(private http: HttpClient) {}

  getSources() {
    return this.http.get<Source>(this.URL);
  }
}
