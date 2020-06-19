import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { SearchCriteria } from "../../models/headline.model";

@Component({
  selector: "app-page-buttons",
  templateUrl: "./page-buttons.component.html",
  styleUrls: ["./page-buttons.component.scss"]
})
export class PageButtonsComponent implements OnInit {
  constructor() {}

  @Input() page: SearchCriteria["page"];
  @Input() numberOfArticles: number;
  @Input() pageSize: SearchCriteria["pageSize"];

  @Output() pageIncrease = new EventEmitter<void>();
  @Output() pageDeacrease = new EventEmitter<void>();

  ngOnInit(): void {}

  onIncreaseClick(): void {
    this.pageIncrease.emit();
  }
  onDeacraseClick(): void {
    this.pageDeacrease.emit();
  }
}
