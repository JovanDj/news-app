import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SourceResponse } from "../models/source.model";

@Component({
  selector: "app-sources",
  templateUrl: "./sources.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./sources.component.scss"]
})
export class SourcesComponent implements OnInit {
  showSpinner = false;
  sources: SourceResponse;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.showSpinner = true;
    this.sources = this.route.snapshot.data["sources"];
  }
}
