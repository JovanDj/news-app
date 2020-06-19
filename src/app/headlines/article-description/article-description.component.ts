import { Component, OnInit, Input } from "@angular/core";
import { Article } from "../../models/headline.model";

@Component({
  selector: "app-article-description",
  templateUrl: "./article-description.component.html",
  styleUrls: ["./article-description.component.scss"]
})
export class ArticleDescriptionComponent implements OnInit {
  @Input() article: Article;
  @Input() i: number;

  constructor() {}

  ngOnInit(): void {}
}
