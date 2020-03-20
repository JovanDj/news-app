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

  getHeadlines(
    formData: SearchCriteria,
    page = 1
  ): Observable<HeadlinesResponse> {
    const params: HttpParams = new HttpParams()
      .set("q", formData.topic)
      .set("pageSize", formData.pageSize.toString())
      .set("page", page.toString())
      .set("category", formData.category)
      .set("country", formData.country);

    return this.http
      .get<HeadlinesResponse>(this.URL, { params })
      .pipe(
        shareReplay(),
        catchError((err: HttpErrorResponse) => throwError(err))
      );
  }
}
