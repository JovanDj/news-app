import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Observable } from "rxjs";
import { SearchCriteria } from "../models/headline.model";
import { HeadlinesFacade, HeadlinesState } from "./headlines.facade";

@Component({
  selector: "app-headlines",
  templateUrl: "./headlines.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./headlines.component.scss"]
})
export class HeadlinesComponent {
  vm$: Observable<HeadlinesState>;

  constructor(private headlinesFacade: HeadlinesFacade) {
    this.vm$ = headlinesFacade.vm$;
  }

  receiveHeadlines(formData: SearchCriteria): void {
    this.headlinesFacade.updateSearchCriteria(formData);
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
