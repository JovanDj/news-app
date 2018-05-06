import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Headline} from '../models/headline.model';

@Injectable()
export class HeadlinesService {

  url: string = environment.baseUrl + '/top-headlines';
  params: HttpParams = new HttpParams();

  constructor(private http: HttpClient) {
  }

  getHeadlines(formData: any) {
    this.params = this.params.append('topic', formData.topic);

    for (const category of formData.category) {
      this.params = this.params.append('category', category);
    }

    for (const country of formData.country) {
      this.params = this.params.append('country', country);
    }

    return this.http.get<Headline>(this.url, {params: this.params});
  }
}
