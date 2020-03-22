import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { distinctUntilChanged, map, switchMap, tap } from "rxjs/operators";
import { HeadlinesResponse, SearchCriteria } from "../models/headline.model";
import { HeadlinesService } from "../services/headlines.service";

export interface HeadlinesState {
  headlines: HeadlinesResponse;
  searchCriteria: SearchCriteria;
  page: number;
  loading: boolean;
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
  page: 1,
  loading: false
};

@Injectable({
  providedIn: "root"
})
export class HeadlinesFacade {
  private readonly store: BehaviorSubject<HeadlinesState>;
  private readonly state$: Observable<HeadlinesState>;

  headlines$: Observable<HeadlinesResponse>;
  searchCriteria$: Observable<SearchCriteria>;
  page$: Observable<number>;
  loading$: Observable<boolean>;
  vm$: Observable<HeadlinesState>;

  constructor(private headlinesService: HeadlinesService) {
    this.store = new BehaviorSubject<HeadlinesState>(_state);
    this.state$ = this.store.asObservable();

    this.headlines$ = this.state$.pipe(
      map((state: HeadlinesState) => {
        return state.headlines;
      }),
      distinctUntilChanged()
    );

    this.searchCriteria$ = this.state$.pipe(
      map((state: HeadlinesState) => {
        return state.searchCriteria;
      }),
      distinctUntilChanged()
    );

    this.page$ = this.state$.pipe(
      map((state: HeadlinesState) => {
        return state.page;
      }),
      distinctUntilChanged()
    );

    this.loading$ = this.state$.pipe(
      map((state: HeadlinesState) => {
        return state.loading;
      }),
      distinctUntilChanged()
    );

    this.vm$ = combineLatest(
      this.headlines$,
      this.searchCriteria$,
      this.page$,
      this.loading$
    ).pipe(
      map(
        ([headlines, searchCriteria, page, loading]: [
          HeadlinesResponse,
          SearchCriteria,
          number,
          boolean
        ]) => {
          return {
            headlines,
            searchCriteria,
            page,
            loading
          };
        }
      )
    );

    // Get headlines on search criteria change
    combineLatest(this.searchCriteria$, this.page$)
      .pipe(
        switchMap(([searchCriteria, page]: [SearchCriteria, number]) => {
          return this.headlinesService.getHeadlines(searchCriteria, page);
        }),
        tap((headlinesResponse: HeadlinesResponse) => {
          this.updateHeadlines(headlinesResponse);
        })
      )
      .subscribe();
  }

  updateHeadlines(headlines: HeadlinesResponse): void {
    this.updateState((_state = { ..._state, headlines, loading: true }));
  }

  updateSearchCriteria(searchCriteria: SearchCriteria): void {
    this.updateState((_state = { ..._state, searchCriteria, loading: true }));
  }

  pageIncrease(): void {
    const page: number = ++_state.page;

    this.updateState((_state = { ..._state, page, loading: true }));
  }

  pageDecrease(): void {
    const page: number = --_state.page;

    this.updateState((_state = { ..._state, page, loading: true }));
  }

  private updateState(state: HeadlinesState): void {
    this.store.next((_state = state));
  }
}
