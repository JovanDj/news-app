import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SearchCriteria, Article, Headline } from '../models/headline.model';
import { Observable } from 'rxjs';

import { HeadlinesService } from '../services/headlines.service';
import { HeadlinesFacade } from './headlines.facade';
import { finalize, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  showSpinner = false;
  headlines$: Observable<Article[]>;
  totalResults$: Observable<number>;
  pageSize$: Observable<number>;
  page$: Observable<number>;

  constructor(private headlinesService: HeadlinesService, private headlinesFacade: HeadlinesFacade) {
    this.headlines$ = this.headlinesFacade.articles$;
    this.totalResults$ = this.headlinesFacade.totalResults$;
    this.page$ = this.headlinesFacade.page$;
    this.pageSize$ = this.headlinesFacade.searchCriteria$.pipe(
      map((searchCriteria: SearchCriteria) => {
        console.log(searchCriteria.pageSize);
        return searchCriteria.pageSize;
      })
    );
  }

  receiveHeadlines(formData: SearchCriteria) {
    this.showSpinner = true;

    this.headlinesFacade.updateSearchCriteria(formData);

    this.headlinesService
      .getHeadlines(formData)
      .pipe(
        tap((headlines: Headline) => {
          console.log(headlines);
          this.headlinesFacade.updateHeadlines(headlines);
        }),
        finalize(() => {
          this.showSpinner = false;
        })
      )
      .subscribe();
  }

  pageIncrease() {
    this.headlinesFacade.pageIncrease();
  }
  pageDecrease() {
    this.headlinesFacade.pageDecrease();
  }

  ngOnInit() {}
}
