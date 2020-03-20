import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {
  distinctUntilChanged,
  map,
  skip,
  startWith,
  switchMap,
  tap
} from "rxjs/operators";
import { HeadlinesResponse, SearchCriteria } from "../models/headline.model";
import { HeadlinesService } from "../services/headlines.service";

export interface HeadlinesState {
  headlines: HeadlinesResponse;
  searchCriteria: SearchCriteria;
  page: number;
}

let _state: HeadlinesState = {
  headlines: {
    articles: [],
    status: "",
    totalResults: 0
  },
  searchCriteria: {
    category: "general",
    pageSize: 10,
    country: "us",
    topic: "",
    page: 1
  },
  page: 1
};

@Injectable({
  providedIn: "root"
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
    distinctUntilChanged()
  );

  searchCriteria$ = this.state$.pipe(
    map(state => {
      return state.searchCriteria;
    }),
    distinctUntilChanged()
  );

  page$ = this.state$.pipe(
    map(state => {
      return state.page;
    }),
    distinctUntilChanged()
  );

  constructor(private headlinesService: HeadlinesService) {
    this.page$
      .pipe(
        skip(1),
        startWith(0),
        switchMap(() => {
          return this.headlinesService
            .getHeadlines(_state.searchCriteria, _state.page)
            .pipe(
              tap((headlines: HeadlinesResponse) => {
                this.updateHeadlines(headlines);
              })
            );
        })
      )
      .subscribe();
  }

  updateHeadlines(headlines: HeadlinesResponse) {
    this.store.next((_state = { ..._state, headlines }));
  }

  updateSearchCriteria(searchCriteria: SearchCriteria) {
    this.store.next((_state = { ..._state, searchCriteria }));
  }

  pageIncrease() {
    const page = ++_state.page;
    this.store.next((_state = { ..._state, page }));
  }

  pageDecrease() {
    const page = --_state.page;
    this.store.next((_state = { ..._state, page }));
  }
}
