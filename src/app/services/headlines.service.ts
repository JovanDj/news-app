import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, shareReplay } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { HeadlinesResponse, SearchCriteria } from "../models/headline.model";

@Injectable({
  providedIn: "root"
})
export class HeadlinesService {
  URL: string = environment.baseUrl + "/top-headlines";

  constructor(private http: HttpClient) {}

  getHeadlines(searchCriteria: SearchCriteria): Observable<HeadlinesResponse> {
    const params: HttpParams = new HttpParams()
      .set("q", searchCriteria.topic)
      .set("pageSize", searchCriteria.pageSize.toString())
      .set("page", searchCriteria.page.toString())
      .set("category", searchCriteria.category)
      .set("country", searchCriteria.country);

    return this.http
      .get<HeadlinesResponse>(this.URL, { params })
      .pipe(
        shareReplay(),
        catchError((err: HttpErrorResponse) => throwError(err))
      );
  }
}
