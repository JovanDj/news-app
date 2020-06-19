import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { distinctUntilChanged, map, switchMap, tap } from "rxjs/operators";
import { HeadlinesResponse, SearchCriteria } from "../models/headline.model";
import { HeadlinesService } from "../services/headlines.service";

export interface HeadlinesState {
  headlines: HeadlinesResponse;
  searchCriteria: SearchCriteria;
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
  page$: Observable<SearchCriteria["page"]>;
  loading$: Observable<HeadlinesState["loading"]>;
  vm$: Observable<HeadlinesState>;

  constructor(private headlinesService: HeadlinesService) {
    this.store = new BehaviorSubject<HeadlinesState>(_state);
    this.state$ = this.store.asObservable();

    this.state$.subscribe((state) => console.log(state));

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
        return state.searchCriteria.page;
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
      map(([headlines, searchCriteria, page, loading]) => {
        return {
          headlines,
          searchCriteria,
          page,
          loading
        };
      })
    );

    // Get headlines on search criteria change
    combineLatest(this.searchCriteria$)
      .pipe(
        switchMap(([searchCriteria]) => {
          console.log(searchCriteria);
          return this.headlinesService.getHeadlines(searchCriteria);
        }),
        tap((headlines: HeadlinesResponse) => {
          this.updateState({ ..._state, headlines, loading: false });
        })
      )
      .subscribe();
  }

  updateHeadlines(headlines: HeadlinesResponse): void {
    this.updateState({ ..._state, headlines, loading: true });
  }

  updateSearchCriteria(searchCriteria: SearchCriteria): void {
    this.updateState({ ..._state, searchCriteria, loading: true });
  }

  pageIncrease(): void {
    const newPage = _state.searchCriteria.page + 1;

    this.updateState({
      ..._state,
      searchCriteria: {
        ..._state.searchCriteria,
        page: newPage
      }
    });
  }

  pageDecrease(): void {
    const page: number = _state.searchCriteria.page - 1;

    this.updateState({
      ..._state,
      searchCriteria: { ..._state.searchCriteria, page }
    });
  }

  private updateState(state: HeadlinesState): void {
    this.store.next((_state = state));
  }
}
