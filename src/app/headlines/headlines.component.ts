import { Component, OnInit } from '@angular/core';
import { Headline } from '../models/headline.model';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  // Control spinner with this
  showSpinner: Boolean = false;
  headlines: Headline = {} as Headline;

  constructor() {}

  receiveHeadlines($event: any) {
    this.headlines = $event;
  }

  ngOnInit() {}
}
