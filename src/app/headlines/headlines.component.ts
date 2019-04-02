import { Component, OnInit } from '@angular/core';
import { Headline } from '../models/headline.model';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { HeadlinesService } from '../services/headlines.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  showSpinner = false;
  headlines$: Observable<Headline>;

  constructor(private headlinesService: HeadlinesService) {}

  receiveHeadlines(formData: any) {
    this.headlines$ = this.headlinesService.getHeadlines(formData).pipe(
      finalize(() => {
        this.showSpinner = false;
      })
    );
  }

  ngOnInit() {}
}
