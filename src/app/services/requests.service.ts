import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RequestsService {

  constructor(private http: HttpClient) {

  }

  getHeadlines(formData) {

    const token = '2c35501e6a3840d6bd4d7bb11cd57e0d';

    let url = `https://newsapi.org/v2/everything?q=${formData.topic}&sortby=popularity&language=en`;
    if (formData.topic === null) {
      url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&language=en';
    };

    return this.http.get(url);
  }

}
