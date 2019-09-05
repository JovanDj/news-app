import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SearchCriteria, Article } from '../models/headline.model';
import { Observable } from 'rxjs';

import { HeadlinesService } from '../services/headlines.service';
import { HeadlinesFacade } from './headlines.facade';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  showSpinner = false;
  headlines$: Observable<Article[]>;

  constructor(private headlinesService: HeadlinesService, private headlinesFacade: HeadlinesFacade) {
    this.headlines$ = this.headlinesFacade.articles$;
  }

  receiveHeadlines(formData: SearchCriteria) {
    this.showSpinner = true;
    this.headlinesService
      .getHeadlines(formData)
      .pipe(
        finalize(() => {
          this.showSpinner = false;
        })
      )
      .subscribe();
  }

  ngOnInit() {}
}
