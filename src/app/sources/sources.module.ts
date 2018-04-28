import {NgModule} from '@angular/core';

import {SourcesRoutingModule} from './sources-routing.module';
import {SourcesComponent} from './sources.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SourcesRoutingModule
  ],
  declarations: [
    SourcesComponent
  ]
})
export class SourcesModule {
}
