import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Source } from '../models/source.model';
import { SourcesService } from '../services/sources.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SourcesResolverService implements Resolve<Source> {
  constructor(private sourcesService: SourcesService) {}

  resolve(): Observable<Source> {
    return this.sourcesService.getSources();
  }
}
