import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { SourceResponse } from "../models/source.model";
import { SourcesService } from "../services/sources.service";

@Injectable({
  providedIn: "root"
})
export class SourcesResolverService implements Resolve<SourceResponse> {
  constructor(private sourcesService: SourcesService) {}

  resolve(): Observable<SourceResponse> {
    return this.sourcesService.getSources();
  }
}
