import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { finalize, map, skip, tap } from "rxjs/operators";
import {
  Article,
  HeadlinesResponse,
  SearchCriteria
} from "../models/headline.model";
import { HeadlinesService } from "../services/headlines.service";
import { HeadlinesFacade } from "./headlines.facade";

@Component({
  selector: "app-headlines",
  templateUrl: "./headlines.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./headlines.component.scss"]
})
export class HeadlinesComponent implements OnInit {
  showSpinner = false;
  headlines$: Observable<Article[]>;
  totalResults$: Observable<number>;
  pageSize$: Observable<number>;
  page$: Observable<number>;

  constructor(
    private headlinesService: HeadlinesService,
    private headlinesFacade: HeadlinesFacade
  ) {
    this.headlines$ = this.headlinesFacade.articles$.pipe(skip(1));
    this.totalResults$ = this.headlinesFacade.totalResults$;
    this.page$ = this.headlinesFacade.page$;

    this.pageSize$ = this.headlinesFacade.searchCriteria$.pipe(
      map((searchCriteria: SearchCriteria) => {
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
        tap((headlines: HeadlinesResponse) => {
          this.headlinesFacade.updateHeadlines(headlines);
        }),

        finalize(() => {
          this.showSpinner = false;
        })
      )
      .subscribe();
  }

  pageIncrease(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    this.headlinesFacade.pageIncrease();
  }
  pageDecrease(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    this.headlinesFacade.pageDecrease();
  }

  ngOnInit() {}
}
