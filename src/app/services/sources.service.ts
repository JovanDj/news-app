import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SourcesService {
  url: string = environment.baseUrl + '/sources';

  constructor(private http: HttpClient) { }

  getSources() {
    return this.http.get(this.url);
  }

}
