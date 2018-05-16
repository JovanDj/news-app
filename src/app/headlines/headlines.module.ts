import { NgModule } from '@angular/core';

import { HeadlinesRoutingModule } from './headlines-routing.module';
import { HeadlinesComponent } from './headlines.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, HeadlinesRoutingModule],
  declarations: [HeadlinesComponent]
})
export class HeadlinesModule {}
