import { Injectable } from '@angular/core';
import { Headline, SearchCriteria } from '../models/headline.model';
import { BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged, switchMap, tap, startWith, skip, shareReplay } from 'rxjs/operators';
import { HeadlinesService } from '../services/headlines.service';

export interface HeadlinesState {
  headlines: Headline;
  searchCriteria: SearchCriteria;
  page: number;
}

let _state: HeadlinesState = {
  headlines: {
    articles: [],
    status: '',
    totalResults: 0
  },
  searchCriteria: {
    category: ['general'],
    pageSize: 20,
    country: ['us'],
    topic: ''
  },
  page: 1
};

@Injectable({
  providedIn: 'root'
})
export class HeadlinesFacade {
  private store = new BehaviorSubject<HeadlinesState>(_state);
  private state$ = this.store.asObservable();

  articles$ = this.state$.pipe(
    map(state => {
      return state.headlines.articles;
    }),
    skip(1),
    distinctUntilChanged()
  );

  totalResults$ = this.state$.pipe(
    map(state => {
      return state.headlines.totalResults;
    }),
    distinctUntilChanged(),
    shareReplay(1)
  );

  searchCriteria$ = this.state$.pipe(
    map(state => {
      return state.searchCriteria;
    }),
    distinctUntilChanged(),
    shareReplay(1)
  );

  page$ = this.state$.pipe(
    map(state => {
      return state.page;
    }),
    distinctUntilChanged(),
    shareReplay(1)
  );

  constructor(private headlinesService: HeadlinesService) {
    this.page$
      .pipe(
        skip(1),
        startWith(0),
        switchMap(() => {
          return this.headlinesService.getHeadlines(_state.searchCriteria, _state.page).pipe(
            tap((headlines: Headline) => {
              this.updateHeadlines(headlines);
            })
          );
        })
      )
      .subscribe();
  }

  updateHeadlines(headlines: Headline) {
    this.store.next((_state = { ..._state, headlines }));

    console.log(this.store.getValue());
  }

  updateSearchCriteria(searchCriteria: SearchCriteria) {
    this.store.next((_state = { ..._state, searchCriteria }));
  }

  pageIncrease() {
    const page = ++_state.page;
    this.store.next((_state = { ..._state, page }));
    console.log(this.store.getValue());
  }

  pageDecrease() {
    const page = --_state.page;
    this.store.next((_state = { ..._state, page }));
    console.log(this.store.getValue());
  }
}
