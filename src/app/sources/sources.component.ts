import {Component, OnInit} from '@angular/core';
import {SourcesService} from '../services/sources.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  sources: any;

  constructor(private sourcesService: SourcesService) {
    this.sourcesService.getSources().subscribe(sources => {
      this.sources = sources['sources'];
      console.log(this.sources);
    });
  }

  ngOnInit() {

  }

}
