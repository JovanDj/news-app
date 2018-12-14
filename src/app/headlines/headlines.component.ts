import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Headline } from '../models/headline.model';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  // Control spinner with this
  showSpinner: Boolean = false;

  // Store subscriptions here
  headlinesSub: Subscription = new Subscription();

  // Put results of http request here
  headline: Headline = {} as Headline;

  constructor() {}

  receiveHeadlines($event: any) {
    this.headline = $event;
  }

  ngOnInit() {}


}
