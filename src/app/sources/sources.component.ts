import {Component, OnDestroy, OnInit} from '@angular/core';
import {SourcesService} from '../services/sources.service';
import {ISubscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit, OnDestroy {

  // Store subscriptions here
  sourcesSub: ISubscription;


  sources: any;

  constructor(private sourcesService: SourcesService) {

  }

  ngOnInit() {
    this.sourcesSub = this.sourcesService.getSources().subscribe(sources => {
      this.sources = sources['sources'];
      console.log(this.sources);
    });
  }

  ngOnDestroy() {
    this.sourcesSub.unsubscribe();
  }

}
