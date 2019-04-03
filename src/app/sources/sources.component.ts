import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Source } from '../models/source.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  showSpinner = false;
  sources: Source;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.showSpinner = true;
    this.sources = this.route.snapshot.data['sources'];
    console.log(this.sources);
  }
}
