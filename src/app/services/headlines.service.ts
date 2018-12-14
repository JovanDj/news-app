import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Headline } from '../models/headline.model';

@Injectable()
export class HeadlinesService {
  URL: string = environment.baseUrl + '/top-headlines';

  constructor(private http: HttpClient) {}

  getHeadlines(formData: any) {
    let params: HttpParams = new HttpParams();
    params = params.append('q', formData.topic);

    for (const category of formData.category) {
      params = params.append('category', category);
    }

    for (const country of formData.country) {
      params = params.append('country', country);
    }

    return this.http.get<Headline>(this.URL, { params: params });
  }
}
