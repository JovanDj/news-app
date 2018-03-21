import {Component, OnInit} from '@angular/core';
import {RequestsService} from '../services/requests.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  sources: any;

  constructor(private requests: RequestsService) {
    this.requests.getSources().subscribe(sources => {
      this.sources = sources['sources'];
      console.log(this.sources);
    });
  }

  ngOnInit() {

  }

}
