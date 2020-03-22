import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, shareReplay } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { SourceResponse } from "../models/source.model";

@Injectable({
  providedIn: "root"
})
export class SourcesService {
  URL: string = environment.baseUrl + "/sources";

  constructor(private http: HttpClient) {}

  getSources(): Observable<SourceResponse> {
    return this.http.get<SourceResponse>(this.URL).pipe(
      shareReplay(),
      catchError((err: HttpErrorResponse) => throwError(err))
    );
  }
}
