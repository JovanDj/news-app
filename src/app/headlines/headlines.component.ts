import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { HeadlinesResponse, SearchCriteria } from "../models/headline.model";
import { HeadlinesService } from "../services/headlines.service";
import { HeadlinesFacade, HeadlinesState } from "./headlines.facade";

@Component({
  selector: "app-headlines",
  templateUrl: "./headlines.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./headlines.component.scss"]
})
export class HeadlinesComponent {
  showSpinner = false;
  vm$: Observable<HeadlinesState>;

  constructor(
    private headlinesService: HeadlinesService,
    private headlinesFacade: HeadlinesFacade
  ) {
    this.vm$ = headlinesFacade.vm$;
  }

  receiveHeadlines(formData: SearchCriteria): void {
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

  pageIncrease(el: HTMLElement): void {
    el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    this.headlinesFacade.pageIncrease();
  }
  pageDecrease(el: HTMLElement): void {
    el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    this.headlinesFacade.pageDecrease();
  }
}
