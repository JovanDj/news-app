import { Injectable } from '@angular/core';
import { Headline } from '../models/headline.model';
import { BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

export interface HeadlinesState {
  headlines: Headline;
}

let _state: HeadlinesState = {
  headlines: {
    articles: [],
    status: '',
    totalResults: 0
  }
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
    distinctUntilChanged()
  );
  constructor() {}

  updateHeadlines(headlines: Headline) {
    this.store.next((_state = { ..._state, headlines }));
  }
}
