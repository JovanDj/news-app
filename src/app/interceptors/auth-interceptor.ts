import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.

    const authReq = req.clone({
      headers: req.headers.set("Authorization", environment.token)
    });

    // send the newly created request
    return next.handle(authReq);
  }
}
