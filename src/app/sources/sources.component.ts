import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SourcesService } from '../services/sources.service';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Source } from '../models/source.model';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  showSpinner = false;
  sources$: Observable<Source>;

  constructor(private sourcesService: SourcesService) {}

  ngOnInit() {
    this.showSpinner = true;
    this.sources$ = this.sourcesService.getSources().pipe(
      finalize(() => {
        this.showSpinner = false;
      })
    );
  }
}
