import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class EverythingService {

  url: string = environment.baseUrl + '/everything';

  constructor(private http: HttpClient) {
  }

  getEverything(searchCriteria: any) {
    let params: HttpParams = new HttpParams();
    params = params.append('q', searchCriteria.q);


    for (const language of searchCriteria.language) {
      params = params.append('language', language);
    }

    return this.http.get(this.url, {params: params});

  }

}