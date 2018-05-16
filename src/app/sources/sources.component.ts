import { Component, OnDestroy, OnInit } from '@angular/core';
import { SourcesService } from '../services/sources.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit, OnDestroy {
  // Store subscriptions here
  sourcesSub: Subscription = new Subscription();
  sources: any;

  constructor(private sourcesService: SourcesService) {}

  ngOnInit() {
    // Get the list of sources from the server
    this.sourcesSub = this.sourcesService.getSources().subscribe(sources => {
      this.sources = sources['sources'];
    });
  }

  ngOnDestroy() {
    // Unsubscribe when the component is destroyed
    if (this.sourcesSub) {
      this.sourcesSub.unsubscribe();
    }
  }
}
